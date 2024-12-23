import mongoose , { Schema , model } from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  ratings: { type: Number, required: true },
});

const Product = mongoose.model('Product', productSchema);
export default Product;
