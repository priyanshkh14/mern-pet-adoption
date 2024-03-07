import express from 'express';
import { createRehome, deleteRehome, updateRehome } from '../controllers/rehome.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createRehome);
router.delete('/delete/:id', verifyToken, deleteRehome);
router.post('/update/:id', verifyToken, updateRehome);

export default router;