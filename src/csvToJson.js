import csv from "csvtojson";
import fs from "fs";

const csvFilePath = "src/products.csv";

csv()
  .fromFile(csvFilePath)
  .then((jsonArray) => {
    const formatted = jsonArray.map((item) => ({
      sku: item["SKU"],
      name: item["Product Name"],
    }));

    fs.writeFileSync(
      "products.js",
      `const products = ${JSON.stringify(
        formatted,
        null,
        2
      )};\n\nexport default products;`
    );
    console.log("✅ Conversion complete. Saved to products.json");
  })
  .catch((err) => {
    console.error("❌ Error converting CSV to JSON:", err);
  });
