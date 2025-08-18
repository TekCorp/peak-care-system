import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    category_id: Number,
    category: String
})

const Category = mongoose.model("Category", categorySchema);
export default Category;