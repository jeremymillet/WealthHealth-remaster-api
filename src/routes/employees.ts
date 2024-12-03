import express from 'express';
import { deleteEmployee, getDepartments, getEmployees, getStates, putEmployee, postEmployee, getEmployee } from '../controllers/employees/employeesController';
import { auth } from '../midleware/auth'

const router = express.Router();

router.get('/departments', getDepartments);
router.get('/states', getStates);
router.get('/', getEmployees);
router.get('/:id', getEmployee);
router.post('/', auth, postEmployee);
router.delete('/:id', auth, deleteEmployee);
router.put('/:id', auth, putEmployee);

export default router;