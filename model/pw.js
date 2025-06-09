import mongoose from "mongoose";

const pwSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
export default mongoose.model("pw", pwSchema);

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  formattedName: {
    type: String,
  },
  formatSplicedName: {
    type: String,
  },
  splicedName: {
    type: String,
  },
  sku: {
    type: String,
    required: true,
  },
  exist: {
    type: Boolean,
    default: false,
  },
  download: {
    type: Boolean,
    default: false,
  },
  upload: {
    type: Boolean,
    default: false,
  },
});
export const product = mongoose.model("product", productSchema);
