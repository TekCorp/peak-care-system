import mongoose from "mongoose";

const locationSchema = mongoose.Schema({
    location_id: Number, 
    slug_url: {
        required: true,
        type: String
    },
    main_heading: {
        required: true,
        type: String
    },
    main_paragraph: {
        required: true,
        type: String
    },
    highlighted_heading: {
        required: true,
        type: String
    },
    heading_1: {
        required: true,
        type: String
    },
    paragraph_1: {
        required: true,
        type: String
    },
    heading_2: {
        required: true,
        type: String
    },
    paragraph_2: {
        required: true,
        type: String
    },
    heading_3: {
        required: true,
        type: String
    },
    paragraph_3: {
        required: true,
        type: String
    },
    heading_4: {
        required: true,
        type: String
    },
    paragraph_4: {
        required: true,
        type: String
    },
    meta_title: {
        required: true,
        type: String
    },
    meta_keywords: {
        required: true,
        type: String
    },
    meta_link: {
        required: true,
        type: String
    },
    meta_description: {
        required: true,
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Location = mongoose.model("Location", locationSchema);
export default Location;