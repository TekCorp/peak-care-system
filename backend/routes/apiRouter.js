import express from 'express';
const router= express.Router();

import { getBlogs,getBlogsId, getBlogsByCategory, getBlogById, createBlog, updateBlog, deleteBlog } from '../controllers/blogsController.js';

// blogs routes
router.get('/blogs', getBlogs); 
router.get('/blogs-id', getBlogsId); 
router.get('/get_blogs_by_category/:id', getBlogsByCategory);  
router.get('/single-blog/:id', getBlogById); 
router.post('/blogs', createBlog);  
router.put('/blogs/:id', updateBlog); 
router.delete('/blogs/:id', deleteBlog);

export default router;