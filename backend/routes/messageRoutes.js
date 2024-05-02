import express from 'express';
import {
  deleteMessage,
  createMessage,
  GetMessage,
} from '../controllers/messageControllers.js';
import { protect } from '../middleWares/authMiddleware.js';
const router = express.Router();

router.route('/').post(protect, createMessage);

router.route('/:id').delete(protect, deleteMessage).get(protect, GetMessage);

export default router;
