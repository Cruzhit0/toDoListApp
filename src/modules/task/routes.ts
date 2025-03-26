import { Router } from 'express';
import { TaskController } from './controllers/taskController';

const router = Router();
const taskController = new TaskController();

router.get('/', taskController.getAllTasks.bind(taskController));
router.post('/', taskController.createTask.bind(taskController));
router.get('/user', taskController.getTasksByUser.bind(taskController));
router.get('/:id', taskController.getTaskById.bind(taskController));
router.put('/:id', taskController.updateTask.bind(taskController));
router.delete('/:id', taskController.deleteTask.bind(taskController));

export default router;