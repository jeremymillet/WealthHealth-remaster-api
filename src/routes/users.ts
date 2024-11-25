import express from 'express';
import { postLogin, postLogOut, postToken} from '../controllers/users/usersController';


const router = express.Router();

router.post('/login', postLogin);
router.post('/token', postToken);
router.post('/logout',postLogOut);

export default router;