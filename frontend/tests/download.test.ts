import { test, expect } from "@playwright/test";
import products from "../products"; // your product array

test("download product PDFs", async ({ context }) => {
  for (const [index, item] of products.entries()) {
    if (item.download) {
      console.log(
        `🟡 Skipping (${index + 1}/${products.length}): ${
          item.formatSplicedName
        }`
      );
      continue;
    }

    try {
      const page = await context.newPage();
      await page.goto("https://quest3plus.bpfk.gov.my/pmo2/index.php", {
        waitUntil: "domcontentloaded",
      });

      console.log(
        `🔄 (${index + 1}/${products.length}) Processing: ${
          item.formatSplicedName
        }`
      );

      // Select search by Product Name
      await page.locator("#searchBy").selectOption("1");

      // Fill product name and search
      await page
        .getByRole("textbox", { name: /Please enter/i })
        .fill(item.formatSplicedName);
      await page.getByRole("button", { name: /search/i }).click();

      // Wait for either "No results" or result grid cell
      const noResultsLocator = page.locator("text=No results found, please");
      const resultLocator = page
        .getByRole("gridcell", { name: /MAL/i })
        .first();

      const outcome = await Promise.race([
        noResultsLocator
          .waitFor({ timeout: 15000 })
          .then(() => "noResults")
          .catch(() => null),
        resultLocator
          .waitFor({ timeout: 15000 })
          .then(() => "result")
          .catch(() => null),
      ]);

      if (outcome === "noResults") {
        console.log(
          `⚠️ No results found for (${index + 1}/${products.length}): ${
            item.formatSplicedName
          }`
        );

        continue;
      }

      // Click registration link and wait for popup
      const page2Promise = page.waitForEvent("popup");
      await resultLocator.click();
      const page2 = await page2Promise;


      // PRODUCT YANG TAKDE TABLE LEAFLET
      try {
        await page2
          .getByText(
            "Consumer Medication Information Leaflet / Risalah Maklumat Ubat Pesakit No"
          )
          .click({ timeout: 15000 });
      } catch {
        console.log(
          `⚠️ Consumer Medication section not found for: ${item.formatSplicedName}`
        );
        await page2.close();
        await page.close();
        continue;
      }

      // Click the 3rd cell with text '1' to expand the list
      await page2.getByRole("cell", { name: "1", exact: true }).nth(2).click();

      // Get all PDF links
      const pdfLinks = await page2.locator('a[href$=".pdf"]').elementHandles();

      if (pdfLinks.length === 0) {
        console.log(`⚠️ No PDF files found for ${item.formatSplicedName}`);
        await page2.close();
        await page.close();
        continue;
      }

      // Download the first PDF found
      const page12Promise = page2.waitForEvent("popup");
      const downloadPromise = page2.waitForEvent("download");

      await pdfLinks[0].click();

      const page12 = await page12Promise;
      const download = await downloadPromise;

      console.log(`📥 Downloaded: ${await pdfLinks[0].textContent()}`);

      await page2.close();
      await page.close();

      console.log(
        `✅ Completed (${index + 1}/${products.length}): ${
          item.formatSplicedName
        }`
      );
    } catch (error) {
      console.error(
        `❌ Error (${index + 1}/${products.length}) on ${
          item.formatSplicedName
        }:`,
        error
      );
    }
  }
});
