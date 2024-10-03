import express from 'express';
import { getDepartments, getStates } from '../controllers/employees/employeesController';

const router = express.Router();

router.get('/departments', getDepartments);
router.get('/states', getStates)



export default router;