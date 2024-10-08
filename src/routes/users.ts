import express from 'express';
import { postLogin } from '../controllers/users/usersController';

const router = express.Router();

router.post('/login', postLogin);

export default router;