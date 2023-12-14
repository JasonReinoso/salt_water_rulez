import express from 'express';
const router = express.Router();
import loginController from '../controllers/loginController.js';

router.post("/",loginController.handleLogin);

export default router;