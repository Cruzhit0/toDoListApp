
import { Router } from 'express';
import  AuthRoutes  from './modules/auth/routes';
import  UserRoutes  from './modules/user/routes'


const router = Router();

router.use('/auth', AuthRoutes);
router.use('/user', UserRoutes);

router.get('/', (req, res) => {
  res.send('hola mundo');
});

export default router;