
import { Router } from 'express';
// import  AuthRoutes  from './modules/auth/routes';
// import  UserRoutes  from './modules/user/routes'
import  TaskRoutes  from './modules/task/routes';
import  SubtaskRoutes  from './modules/subtask/routes';

const router = Router();

// router.use('/auth', AuthRoutes);
// router.use('/user', UserRoutes);
router.use('/task', TaskRoutes);
router.use('/subtask', SubtaskRoutes);

export default router;