import express from 'express';
import { getDepartments, getEmployees, getStates, postEmployee } from '../controllers/employees/employeesController';

const router = express.Router();

router.get('/departments', getDepartments);
router.get('/states', getStates);
router.get('/', getEmployees);
router.post('/',postEmployee);


export default router;