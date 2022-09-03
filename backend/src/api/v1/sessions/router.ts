import { Router } from 'express';
import { SessionController} from './controller';
import passport from 'passport';

import JwtStrategy from '../../../utils/authentication/jwtStrategy';
import { authenticate } from '../../../utils/middlewares/authenticate';
const router = Router();

const sessionRoutes = () => {
    passport.use(JwtStrategy);
    router.use(authenticate);
    /**
     * @swagger
     * /api/v1/sessions:
     *   get:
     *     summary: Retrieve a list of sessions base on user role.
     *     description: Retrieve a list of sessions.
     *     tags: [Sessions]
     *     responses:
     *        200:
     *          description: list of sessions
     *          schema:
     *              type: object
    */
    router.get('', SessionController.list);

    /**
     * @swagger
     * /api/v1/sessions/:
     *   post:
     *     summary: Create new session
     *     description: Create new session.
     *     tags: [Sessions]
     *     requestBody:
     *        content:
     *          application/json:
     *            schema:
     *              type: object
    */
    router.post('', SessionController.create);

    /**
     * @swagger
     * /api/v1/sessions/{id}:
     *   get:
     *     summary: Retrieve a session.
     *     description: Retrieve a session.
     *     tags: [Sessions]
     *     parameters:
     *         - id: ID
     *     responses:
     *        200:
     *          description: Session
     *          schema:
     *              type: object
    */
    router.get(':sessionId', SessionController.retrieve);

    /**
     * @swagger
     * /api/v1/sessions/{id}:
     *   patch:
     *     summary: Create new session
     *     description: Create new session.
     *     tags: [Sessions]
     *     parameters:
     *         - id: ID
     *     requestBody:
     *        content:
     *          application/json:
     *            schema:
     *              type: object
    */
    router.patch(':sessionId', SessionController.partialUpdate);

    /**
     * @swagger
     * /api/v1/sessions/{id}:
     *   delete:
     *     summary: Delete session
     *     description: Delete session.
     *     tags: [Sessions]
     *     parameters:
     *         - id: ID
     *     responses:
     *          204:
     *              description: Session deleted
    */
    router.delete(':sessionId', SessionController.delete);
    return router;

}

export default sessionRoutes;