import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    blog_id: Number, 
    title: {
        required: true,
        type: String
    },
    metaTitle:{
        type: String
    },
    metaDescription:{
        type: String
    },
    slug_url: {
        required: true,
        type: String
    },
    brief_paragraph: {
        required: true,
        type: String
    }, 
    blog_image: {
        required: true,
        type: String
    },
    published_date: {
        required: true,
        type: String
    },
    category: {
        required: true,
        type: Number
    },
    blogs_content: [{
        heading: {
            required: true,
            type: String,
        },
        paragraph: {
            required: true,
            type: String,
        }
    }], 
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;