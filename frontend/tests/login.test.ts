import { BrowserContext, Page, test, Browser } from "@playwright/test";
import products from "../products";
import fs from "fs";
import path from "path";
import os from "os";

test.setTimeout(0);

async function createSafePage(
  context: BrowserContext,
  timeout = 10000
): Promise<Page | null> {
  try {
    const page = await Promise.race([
      context.newPage(),
      new Promise<null>((_, reject) =>
        setTimeout(
          () => reject(new Error("⏰ Timeout creating new page")),
          timeout
        )
      ),
    ]);
    return page;
  } catch (error: any) {
    console.error("❌ Failed to create new page:", error.message);
    return null;
  }
}

async function safeGoto(
  page: Page,
  url: string,
  retries = 2
): Promise<boolean> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 15000 });
      return true;
    } catch (err: any) {
      console.error(
        `❌ Attempt ${attempt} to goto ${url} failed: ${err.message}`
      );
      if (
        err.message.includes("Test ended") ||
        err.message.includes("has been closed")
      ) {
        console.error("🔥 Fatal: Test or browser has ended — exiting loop");
        throw err; // Let it bubble to end the test
      }
      if (attempt === retries) return false;
      await new Promise((r) => setTimeout(r, 1000));
    }
  }
  return false;
}

async function safeNewContext(
  browser: Browser,
  retries = 2
): Promise<BrowserContext | null> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await browser.newContext();
    } catch (err: any) {
      console.error(
        `❌ Failed to create new context (attempt ${attempt}): ${err.message}`
      );
      if (attempt === retries) return null;
      await new Promise((r) => setTimeout(r, 1000));
    }
  }
  return null;
}

const errorProducts: any = [];

async function processProduct(
  item: any,
  index: number,
  products: any[],
  currentContext: BrowserContext,
  browser: Browser,
  errorProducts: any[]
): Promise<BrowserContext> {
  if (index > 0 && index % 1 === 0) {
    try {
      await currentContext.close();
    } catch {}
    currentContext = await safeNewContext(browser) as BrowserContext;
  }
  if (item.download) {
    console.log(
      `🟡 Skipping (${index + 1}/${products.length}): ${item.formatSplicedName}`
    );
    return currentContext;
  }

  const page = await createSafePage(currentContext);
  if (!page) {
    console.log(
      `⏭️ Skipping due to page creation failure: ${item.formatSplicedName}`
    );
    return currentContext;
  }

  const success = await safeGoto(
    page,
    "https://quest3plus.bpfk.gov.my/pmo2/index.php"
  );
  if (!success) {
    await page.close();
    return currentContext;
  }

  try {
    // --- Begin main logic block (copied from your test) ---
    await safeGoto(page, "https://quest3plus.bpfk.gov.my/pmo2/index.php");

    console.log(
      `🔄 (${index + 1}/${products.length}) Processing: ${item.formatSplicedName}`
    );

    // Select search by Product Name
    await page.locator("#searchBy").selectOption("1");

    // Fill product name and search
    try {
      const input = page.getByRole("textbox", { name: /Please enter/i });
      await input.waitFor({ timeout: 10000 });
      await input.fill(item.formatSplicedName);

      const searchButton = page.getByRole("button", { name: /search/i });
      await searchButton.waitFor({ timeout: 10000 });
      await searchButton.click({ timeout: 15000 });
    } catch {
      console.log(
        `⚠️ Search form not available for: ${item.formatSplicedName}`
      );
      await page.close();
      return currentContext;
    }

    // Wait for either "No results" or result grid cell
    const noResultsLocator = page.locator("text=No results found, please");
    const resultLocator = page.getByRole("gridcell", { name: /MAL/i }).first();

    let outcome: "noResults" | "result" | null | any = null;

    try {
      outcome = await Promise.race([
        Promise.race([
          noResultsLocator
            .waitFor({ timeout: 50000 })
            .then(() => "noResults")
            .catch(() => null),
          resultLocator
            .waitFor({ timeout: 50000 })
            .then(() => "result")
            .catch(() => null),
        ]),
        new Promise<"timeout">((_, reject) =>
          setTimeout(
            () => reject(new Error("⏰ Search timed out after 3s")),
            3000
          )
        ),
      ]);
    } catch (err) {
      console.log(
        `⏭️ Timed out waiting for result for: ${item.formatSplicedName}`
      );
      await page.close();
      return currentContext;
    }

    if (outcome === "noResults") {
      console.log(
        `⚠️ No results found for (${index + 1}/${products.length}): ${item.formatSplicedName}`
      );
      const catchProduct = {
        name: item.name,
        sku: item.sku,
      };
      errorProducts.push({
        ...catchProduct,
        error: `⚠️ No results found for (${index + 1}/${products.length}): ${item.formatSplicedName}`,
      });
      await page.close();
      return currentContext;
    }

    const page2Promise = Promise.race([
      page.waitForEvent("popup"),
      new Promise(
        (_, reject) =>
          setTimeout(
            () => reject(new Error("❌ Timeout: popup did not open in time")),
            10000
          )
      ),
    ]);

    const clickPromise = Promise.race([
      resultLocator.click(),
      new Promise(
        (_, reject) =>
          setTimeout(
            () =>
              reject(
                new Error("❌ Timeout: resultLocator.click() took too long")
              ),
            10000
          )
      ),
    ]);

    try {
      await clickPromise;
    } catch (err: any) {
      console.error(
        `❌ Click error for ${item.formatSplicedName}: ${err.message}`
      );
      const catchProduct = {
        name: item.name,
        sku: item.sku,
      };
      errorProducts.push({
        ...catchProduct,
        error: `❌ Click error for ${item.formatSplicedName}: ${err.message}`,
      });
      await page.close();
      return currentContext;
    }

    let page2;
    try {
      page2 = await page2Promise;
    } catch (err: any) {
      console.error(
        `❌ Popup error for ${item.formatSplicedName}: ${err.message}`
      );
      try {
        await page.close();
      } catch {}
      return currentContext;
    }

    const custMedication = await page2.getByText(
      "Consumer Medication Information Leaflet / Risalah Maklumat Ubat Pesakit No"
    );

    if (!custMedication) {
      console.log(`⚠️ No PDF files found for ${item.formatSplicedName}`);
      await page2.close();
      await page.close();
      return currentContext;
    }

    // Click the 3rd cell with text '1' to expand the list
    const cellLocator = page2
      .getByRole("cell", { name: "1", exact: true })
      .nth(2);

    try {
      await cellLocator.waitFor({ timeout: 10000 });
      await cellLocator.click();
    } catch (error: any) {
      console.log(
        `⚠️ Could not click cell[2] for ${item.formatSplicedName}: ${error.message}`
      );
      errorProducts.push({
        name: item.name,
        sku: item.sku,
        error: `⚠️ Could not click cell[2] for ${item.formatSplicedName}: ${error.message}`,
      });
      await page2.close();
      await page.close();
      return currentContext;
    }

    // Get all PDF links
    const pdfLinks = await page2.locator('a[href$=".pdf"]').elementHandles();
    if (pdfLinks.length === 0) {
      console.log(`⚠️ No PDF files found for ${item.formatSplicedName}`);
      errorProducts.push({
        name: item.name,
        sku: item.sku,
        error: `⚠️ No PDF files found for ${item.formatSplicedName}`,
      });
      await page2.close();
      await page.close();
      return currentContext;
    }

    // Filter only D4 PDFs
    const d4Links: typeof pdfLinks = [];
    for (const link of pdfLinks) {
      const text = (await link.textContent())?.toLowerCase() || "";
      if (text.includes("d4")) d4Links.push(link);
    }

    if (d4Links.length === 0) {
      console.log(`⚠️ No D4 PDFs found for ${item.formatSplicedName}`);
      errorProducts.push({
        name: item.name,
        sku: item.sku,
        error: `⚠️ No D4 PDFs found for ${item.formatSplicedName}`,
      });
      await page2.close();
      await page.close();
      return currentContext;
    }

    // Try to find D4 + ENG/eng/Eng or PIL
    let selectedLink: (typeof d4Links)[0] | undefined;
    for (const link of d4Links) {
      const text = (await link.textContent()) || "";
      if (/eng/i.test(text)) {
        selectedLink = link;
        break;
      }
    }

    // If no ENG match, try for PIL
    if (!selectedLink) {
      for (const link of d4Links) {
        const text = (await link.textContent()) || "";
        if (/pil/i.test(text)) {
          selectedLink = link;
          break;
        }
      }
    }

    if (!selectedLink) {
      console.log(
        `⚠️ No suitable English D4 PDF found for ${item.formatSplicedName}`
      );
      errorProducts.push({
        name: item.name,
        sku: item.sku,
        error: `⚠️ No suitable English D4 PDF found for ${item.formatSplicedName}`,
      });
      await page2.close();
      await page.close();
      return currentContext;
    }

    // Download the selected D4 PDF
    try {
      const popupTimeout = 10000;

      const page3Promise = Promise.race([
        page2.waitForEvent("popup"),
        new Promise((_, reject) =>
          setTimeout(
            () => reject(new Error("⏰ Timeout waiting for popup")),
            popupTimeout
          )
        ),
      ]);

      const downloadPromise = Promise.race([
        page2.waitForEvent("download"),
        new Promise((_, reject) =>
          setTimeout(
            () => reject(new Error("⏰ Timeout waiting for download")),
            popupTimeout
          )
        ),
      ]);

      await selectedLink.click();
      const page3 = await page3Promise.catch(() => null);
      const download = await downloadPromise;
      const linkText =
        (await selectedLink.textContent())?.trim() || "download.pdf";

      const fileName = `${linkText}_${item.sku}.pdf`.replace(
        /[\/\\:*?"<>|]/g,
        "_"
      );
      const safeFileName = fileName.replace(/[\/\\:*?"<>|]/g, "_");

      const downloadsDir = path.join(
        os.homedir(),
        "Downloads",
        "product_leaflet"
      );
      const folderName = `${item.sku}-${item.formatSplicedName}`.replace(
        /[\/\\:*?"<>|]/g,
        "_"
      );
      const folderPath = path.join(downloadsDir, folderName);

      // fs.mkdirSync(folderPath, { recursive: true });

      const fullPath = path.join(folderPath, safeFileName);
      await download.saveAs(fullPath);

      console.log(`📥 Saved to: ${fullPath}`);

      if (page3) await page3.close();
    } catch (err: any) {
      console.warn(
        `⚠️ D4 PDF download failed for ${item.formatSplicedName}`
      );
      errorProducts.push({
        name: item.name,
        sku: item.sku,
        error: `⚠️ D4 PDF download failed for ${item.formatSplicedName}: ${err.message}`,
      });
    }

    await page2.close();
    await page.close();
    await new Promise((res) => setTimeout(res, 300));

    console.log(
      `✅ Completed (${index + 1}/${products.length}): ${item.formatSplicedName}`
    );
    // --- End main logic block ---
  } catch (error) {
    console.error(
      `❌ Error (${index + 1}/${products.length}) on ${item.formatSplicedName}:`,
      error
    );
    const catchProduct = {
      name: item.name,
      sku: item.sku,
    };
    errorProducts.push({
      ...catchProduct,
      error: `❌ Error (${index + 1}/${products.length}) on ${item.formatSplicedName}:`,
    });
  }
  return currentContext;
}

test("download product PDFs", async ({ browser, context }) => {
  let currentContext: BrowserContext = context;

  try {
    for (const [index, item] of products.entries()) {
      currentContext = await processProduct(
        item,
        index,
        products,
        currentContext,
        browser,
        errorProducts
      );
    }
  } catch (fatal) {
    console.error("🔥 Unexpected fatal error outside loop:", fatal);
  }
  if (currentContext !== context) {
    try {
      await currentContext.close();
      await new Promise((r) => setTimeout(r, 2000));
    } catch {}
    currentContext = await safeNewContext(browser) as BrowserContext;
  }
  console.log("errorProducts", errorProducts);
});
