import { Router } from 'express';
import { UserController } from './controllers/userController';
import { authMiddleware } from '@core/middleware/authMiddleware'; 

const router = Router();
const userController = new UserController();

router.post('/', userController.createUser);

//rutas protegidas
router.use(authMiddleware);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.get('/', userController.getAllUsers);

export default router;