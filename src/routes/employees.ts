import express from 'express';
import { getDepartments, getEmployees, getStates, postEmployee } from '../controllers/employees/employeesController';
import { auth } from '../midleware/auth'

const router = express.Router();

router.get('/departments', getDepartments);
router.get('/states', getStates);
router.get('/', getEmployees);
router.post('/',auth ,postEmployee);


export default router;