import express from 'express';
import {
  register,
  auth,
  getUsersById,
  UsersList,
  UserProfile,
} from '../controllers/userControllers.js';
import { protect } from '../middleWares/authMiddleware.js';
const router = express.Router();

// router.route('/').post(register);
router.route('/login').post(auth);

router.route('/').post(register).get(protect, UsersList);

router.route('/profile').get(protect, UserProfile);

router.route('/:id').get(protect, getUsersById);

export default router;
