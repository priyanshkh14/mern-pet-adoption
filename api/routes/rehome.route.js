import express from 'express';
import { createRehome } from '../controllers/rehome.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createRehome);

export default router;