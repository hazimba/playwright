import products from "./products.js";
import fs from "fs";

const namingRemove = {
  removeWord: ["INJECTION", "XR", "STERILE", "INJ", "ORANGE"],
};

const cleanName = (name) => {
  const toBeRemoveList = namingRemove.removeWord.map((w) => w.toUpperCase());

  let normalized = name.replace(/\s+/g, " ").trim();

  normalized = normalized.replace(/^\d+\s*/, "");

  const dosagePattern =
    /\b\d+(\.\d+)?(MG|ML|MCG|G|MG\/ML|MG\/G|ML\/G|'S)\b.*$/i;
  normalized = normalized.replace(dosagePattern, "").trim();

  let words = normalized.split(" ");
  words = words.filter((word) => {
    const cleaned = word.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
    return !toBeRemoveList.includes(cleaned);
  });

  return words.join(" ");
};

const spliceName = (name) => {
  const words = name.split(" ");
  if (words.length === 3) {
    return words.slice(0, 2).join(" ");
  }
  if (words.length > 3) {
    return words.slice(0, 3).join(" ");
  }
  return name;
};

const cleanedProducts = products.map((product) => ({
  ...product,
  formattedName: cleanName(product.name),
  formatSplicedName: spliceName(cleanName(product.name)),
  splicedName: spliceName(product.name),
}));

fs.writeFileSync(
  "cleanedProducts.json",
  JSON.stringify(cleanedProducts, null, 2)
);
console.log("✅ Cleaned products saved to cleanedProducts.json");
