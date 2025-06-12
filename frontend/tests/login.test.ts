import { BrowserContext, Page, test, Browser } from "@playwright/test";
// import products from "../products";
import fs from "fs";
import path from "path";
import os from "os";
import axios from "axios";

const responce = await axios.get("http://localhost:8000/api/pw/productsTestDevelopment?download=false&error=null");
const products = responce.data;

console.log("products", products);

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

async function patchData(
  item: any,
  download: boolean,
  error?: string
): Promise<void> {
  try {
    await axios.patch(`http://localhost:8000/api/pw/productsTestDevelopment/${item._id}`, {
      download: download, // to patch the download
      error,
    });
    console.log(`✅ Updated DB for ${item.name}`);
  } catch (err) {
    console.error(`❌ Failed to update DB for ${item.name}`, err);
  }
}

const catchProductError = (item: any, errorMessage: string) => {
  const catchProduct = {
    name: item.name,
    sku: item.sku,
  };
  console.error(`⚠️ Error for ${item.formatSplicedName}: ${errorMessage}`);
  errorProducts.push({
    ...catchProduct,
    error: `⚠️ Error for ${item.formatSplicedName}: ${errorMessage}`,
  });
};

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
    currentContext = (await safeNewContext(browser)) as BrowserContext;
  }
  if (item.download || item.error) {
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
      `🔄 (${index + 1}/${products.length}) Processing: ${
        item.formatSplicedName
      }`
    );

    // Select search by Product Name
    await page.locator("#searchBy").selectOption("1");

    const nameParts = item.formatSplicedName.trim().split(/\s+/);
    const triedNames = new Set<string>(); // Prevent duplicate searches

    const maxAttempts = nameParts.length > 1 ? 2 : 1;
    let outcome: "noResults" | "result" | null = null;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      let searchName = "";

      if (attempt === 0) {
        // Prefer second word if it exists and is long enough
        const second = nameParts[0];
        if (second && second.length > 4) {
          searchName = second;
        } else {
          searchName = nameParts[1];
        }
      } else {
        // Fallback to first word if different
        searchName = nameParts[1];
      }

      // Skip if already tried or too short
      if (triedNames.has(searchName) || searchName.length <= 3) {
        console.warn(
          `⚠️ Skipping attempt ${
            attempt + 1
          }: "${searchName}" already tried or too short.`
        );
        continue;
      }

      triedNames.add(searchName);
      console.log(`🔄 Attempt ${attempt + 1} using: "${searchName}"`);

      try {
        const input = page.getByRole("textbox", { name: /Please enter/i });
        await input.waitFor({ timeout: 10000 });

        // Reset input field properly
        await input.fill(" ");
        await input.press("Control+A");
        await input.press("Backspace");
        await input.fill(searchName);

        const searchButton = page.getByRole("button", { name: /search/i });
        await searchButton.waitFor({ timeout: 10000 });
        await searchButton.click({ timeout: 15000 });

        // Wait for result or "no results"
        const noResultsLocator = page.locator("text=No results found, please");
        const resultLocator = page
          .getByRole("gridcell", { name: /MAL/i })
          .first();
        console.log(`🔄 Waiting for search results for "${searchName}"...`);
        outcome = (await Promise.race([
          noResultsLocator
            .waitFor({ timeout: 50000 })
            .then(() => "noResults" as const)
            .catch(() => null),
          resultLocator
            .waitFor({ timeout: 50000 })
            .then(() => "result" as const)
            .catch(() => null),
        ])) as "noResults" | "result" | null;

        if (outcome === "result") break; // ✅ Done
      } catch (err) {
        console.error(`❌ Failed search for "${searchName}":`, err);
      }
    }

    // Final fallback
    if (outcome !== "result") {
      await patchData(item, false, "NotFoundByNameParts");
      await page.close();
      return currentContext;
    }

    const page2Promise = Promise.race([
      page.waitForEvent("popup"),
      new Promise((_, reject) =>
        setTimeout(
          () => reject(new Error("❌ Timeout: popup did not open in time")),
          10000
        )
      ),
    ]);

    const resultLocator = page.getByRole("gridcell", { name: /MAL/i }).first();
    const clickPromise = Promise.race([
      resultLocator.click(),
      new Promise((_, reject) =>
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
      catchProductError(
        item,
        `❌ Click error for ${item.formatSplicedName}: ${err.message}`
      );
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
      console.log(
        `⚠️ No PDF files/ Leaflet found for ${item.formatSplicedName}`
      );
      await patchData(item, false, "NoLeafletTableFound!");
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
      await patchData(item, false, "redo-FailedToClickCell!");
      catchProductError(
        item,
        `❌ Failed to click cell for ${item.formatSplicedName}: ${error.message}`
      );
      await page2.close();
      await page.close();
      return currentContext;
    }

    // Get all PDF links
    const pdfLinks = await page2.locator('a[href$=".pdf"]').elementHandles();
    if (pdfLinks.length === 0) {
      catchProductError(
        item,
        `⚠️ No PDF files found for ${item.formatSplicedName}`
      );
      await patchData(item, false, "NoPDFFilesFound!");
      await page2.close();
      await page.close();
      return currentContext;
    }

    // Filter only D4 PDFs
    let selectedLink: (typeof pdfLinks)[0] | undefined;

    // Prioritize links with "ENG" in name
    for (const link of pdfLinks) {
      const text = (await link.textContent()) || "";
      if (/eng/i.test(text)) {
        selectedLink = link;
        break;
      }
    }

    // If no "ENG", look for "PIL"
    if (!selectedLink) {
      for (const link of pdfLinks) {
        const text = (await link.textContent()) || "";
        if (/pil/i.test(text)) {
          selectedLink = link;
          break;
        }
      }
    }

    // If no match at all, consider this a failure
    if (!selectedLink) {
      try {
        await patchData(item, false, "EngOrPilFileNotFound!");
        catchProductError(
          item,
          `⚠️ No ENG or PIL PDFs
          await page.getByRole('gridcell', { name: 'Product Name: activate to' }).click(); found for ${item.formatSplicedName}`
        );
        await page2.close();
        await page.close();
        return currentContext;
      } catch (err) {
        catchProductError(
          item,
          `❌ Failed to update DB for ${item.formatSplicedName}: ${err.message}`
        );
      }
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

      if(!downloadPromise) {
        await patchData(item, false, "FailedToDownload!");
        catchProductError(
          item,
          `❌ Failed to set up download or popup listeners for ${item.formatSplicedName}`
        );
        throw new Error("❌ Failed to set up download or popup listeners");
      }

      await selectedLink.click();
      const page3 = await page3Promise.catch(() => null);
      const download = await downloadPromise;
      const linkText =
        (await selectedLink.textContent())?.trim() || "download.pdf";

      const fileName = `${item.sku}_${linkText}`.replace(/[\/\\:*?"<>|]/g, "_");
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

      fs.mkdirSync(folderPath, { recursive: true });

      const fullPath = path.join(folderPath, safeFileName);
      await download.saveAs(fullPath);

      try {
        await patchData(item, true);
      } catch (err) {
        console.error(`❌ Failed to update DB for ${item.name}`, err);
      }

      console.log(`📥 Saved to: ${fullPath}`);

      if (page3) await page3.close();
    } catch (err: any) {
      console.warn(`⚠️ D4 PDF download failed for ${item.formatSplicedName}`);
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
      `✅ Completed (${index + 1}/${products.length}): ${
        item.formatSplicedName
      }`
    );
    // --- End main logic block ---
  } catch (error) {
    catchProductError(
      item,
      `❌ Error (${index + 1}/${products.length}) on ${
        item.formatSplicedName
      }: ${error}`
    );
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
    currentContext = (await safeNewContext(browser)) as BrowserContext;
  }
  console.log("errorProducts", errorProducts);
});
