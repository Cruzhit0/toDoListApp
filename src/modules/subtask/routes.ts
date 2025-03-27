import { Router } from 'express';
import { SubtaskController } from './controllers/subtaskController';

const router = Router();
const subtaskController = new SubtaskController();


router.get('/', subtaskController.getAllSubtasks.bind(subtaskController));
router.post('/', subtaskController.createSubtask.bind(subtaskController));
router.get('/task/:taskId', subtaskController.getSubtasksByTask.bind(subtaskController));
router.get('/:id', subtaskController.getSubtaskById.bind(subtaskController));
router.put('/:id', subtaskController.updateSubtask.bind(subtaskController));
router.delete('/:id', subtaskController.deleteSubtask.bind(subtaskController));
router.patch('/:id/toggle', subtaskController.toggleSubtaskComplete.bind(subtaskController));

export default router;