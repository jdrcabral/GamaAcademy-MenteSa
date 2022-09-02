import { Router } from 'express';
import { SessionController} from './controller';
import passport from 'passport';

import JwtStrategy from '../../../utils/authentication/jwtStrategy';
import { authenticate } from '../../../utils/middlewares/authenticate';
const router = Router();

const sessionRoutes = () => {
    passport.use(JwtStrategy);
    router.use(authenticate);
    router.get('', SessionController.list);
    router.post('', SessionController.create);
    router.patch(':sessionId', SessionController.partialUpdate);
    router.delete(':sessionId', SessionController.delete);
    return router;
}

export default sessionRoutes;