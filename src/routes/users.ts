import express from 'express';
import { postLogin } from '../controllers/users/usersController';
import { auth } from '../midleware/auth'

const router = express.Router();

router.post('/login',postLogin);

export default router;