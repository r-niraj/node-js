import express from 'express';
const router = express.Router();
import UserController from '../controllers/userController.js';
// import checkUserAuth from '../middlewares/auth-middleware.js';

// public routes
router.post('/register', UserController.userRegistration)
router.post('/login', UserController.userLogin)

export default router