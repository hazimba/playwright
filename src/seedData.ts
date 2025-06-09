import mongoose from "mongoose";
import { productsTestDevelopment } from "../model/pw.js"; // Your test model

const copyProductionDataToTest = async () => {
  try {
    // Connect to the MongoDB
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/playwright");

    const db = mongoose.connection.db;

    if (!db) {
      throw new Error("Database connection is not established.");
    }

    // Read data from the 'products' collection (raw MongoDB access)
    const productionData = await db.collection("products").find({}).toArray();

    // Optional: Clean test collection first
    await productsTestDevelopment.deleteMany();

    // Insert into test collection
    await productsTestDevelopment.insertMany(productionData);

    console.log(`✅ Copied ${productionData.length} records to test collection.`);
  } catch (error) {
    console.error("❌ Failed to copy data:", error);
  } finally {
    await mongoose.connection.close();
  }
};

copyProductionDataToTest();
