import express from 'express';
import { createBlog } from '../controllers/blog.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createBlog);
//router.delete('/delete/:id', verifyToken, deleteBlog);
//router.get('/get/:id', getBlog);
//router.get('/get', getBlog);

export default router;