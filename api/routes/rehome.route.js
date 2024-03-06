import express from 'express';
import { createRehome, deleteRehome } from '../controllers/rehome.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createRehome);
router.delete('/delete/:id', verifyToken, deleteRehome);

export default router;