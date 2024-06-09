import express from 'express';
import { signup, login, jwtLogin, logout } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/jwtlogin', jwtLogin);
router.post('/logout', logout);

export default router;
