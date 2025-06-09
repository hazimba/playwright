import mongoose from "mongoose";
import fs from "fs";
import dotenv from "dotenv";
import { product } from "../model/pw.js"; // Adjust path if needed

dotenv.config();

async function importProducts() {
  try {
    await mongoose.connect(
      process.env.MONGO_URL || "mongodb://localhost:27017/playwright"
    );
    console.log("Connected to MongoDB");

    const data = JSON.parse(fs.readFileSync("cleanedProducts.json", "utf-8"));

    // Validate data before inserting
    const invalidItems = data.filter(
      (p) => !p.name || p.name.trim() === "" || !p.sku || p.sku.trim() === ""
    );

    if (invalidItems.length > 0) {
      console.error(
        "Found invalid products with missing or empty 'name' or 'sku':"
      );
      console.error(invalidItems);
      process.exit(1);
    }

    // Optional: clear existing products if needed
    // await product.deleteMany({});

    const result = await product.insertMany(data);
    console.log("Products inserted:", result.length);

    process.exit(0);
  } catch (err) {
    console.error("Error importing products:", err);
    process.exit(1);
  }
}

importProducts();
