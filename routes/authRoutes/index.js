import { Router } from 'express';
import AuthController from '../../controllers/AuthController';
import validateData from '../../middleware/validateData';


const authRoutes = Router();

authRoutes.post('/auth/signup', validateData, AuthController.signup);
authRoutes.post('/auth/login', AuthController.login);
authRoutes.get('/users', AuthController.getAllUsers);
authRoutes.get('/users/:id', AuthController.getUser);
authRoutes.put('/users/:id', validateData, AuthController.updateUser);
authRoutes.delete('/users/:id', AuthController.deleteUser);


export default authRoutes;
