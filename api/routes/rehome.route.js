import express from 'express';
import { createRehome, deleteRehome, updateRehome, getRehome } from '../controllers/rehome.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createRehome);
router.delete('/delete/:id', verifyToken, deleteRehome);
router.post('/update/:id', verifyToken, updateRehome);
router.get('/get/:id', getRehome);

export default router;