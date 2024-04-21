import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
        },
        description:{ 
            type: String,
            required: true,
        },
        imageUrls:{
            type: Array,
        },
        userRef: {
            type: String,
            required: true,
        },
    }, {timestamp: true}
)

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;