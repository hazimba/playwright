import pw from "../model/pw.js";
import express from "express";
import { product } from "../model/pw.js";

const router = express.Router();

router.get("/getData", async (req, res) => {
  try {
    const pwData = await pw.find();
    if (!pwData || pwData.length === 0) {
      return res.status(404).json({ error: "No passwords found" });
    }

    res.status(200).json(pwData);
  } catch (error) {
    console.error("Error fetching password:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/create", async (req, res) => {
  try {
    const pwData = new pw(req.body);
    const { email } = pwData;
    const existingPw = await pw.findOne({ email });

    if (existingPw) {
      return res
        .status(400)
        .json({ error: "Password with this email already exists" });
    }

    const result = await pwData.save();
    console.log("pw created successfully:", result);

    res.status(201).json(result);
  } catch (error) {
    console.error("Error creating password:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/createProduct", async (req, res) => {
  try {
    const { name, sku } = req.body;

    if (!name || !sku) {
      return res.status(400).json({ error: "Name and SKU are required" });
    }

    const productData = new product({ name, sku });
    const result = await productData.save();

    console.log("Product created successfully:", result);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/getProducts", async (req, res) => {
  try {
    const filter = {};
    if (req.query.download === "false") {
      filter.download = false;
    }
    const products = await product.find(filter).limit(10);

    if (!products || products.length === 0) {
      return res.status(404).json({ error: "No products found" });
    }
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.patch("/updateProduct/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { download, error } = req.body;

    const updatedProduct = await product.findByIdAndUpdate(
      id,
      { ...(download !== undefined && { download }), ...(error && { error }) },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
