import { Router } from 'express';
import { UserController} from './controller';


const router = Router();

const userRoutes = () => {
    /**
     * @swagger
     * /api/v1/users/:
     *   get:
     *     summary: Retrieve a list of user
     *     description: Retrieve a list of users.
     *     tags: [Users]
     *     responses:
     *        200:
     *          description: list of users
     *          schema:
     *              type: object
    */
    router.get('', UserController.list);

    /**
     * @swagger
     * /api/v1/users/:
     *   post:
     *     summary: Create new user
     *     description: Create new user.
     *     tags: [Users]
     *     requestBody:
     *        content:
     *          application/json:
     *            schema:
     *              type: object
     *     responses:
     *        201:
     *          description: created user
     *          schema:
     *              type: object
    */
    router.post('', UserController.create);

    /**
     * @swagger
     * /api/v1/users/:
     *   patch:
     *     summary: Update user
     *     description: Update user.
     *     tags: [Users]
    */
    router.patch(':userId', UserController.partialUpdate);

    return router;
}

export default userRoutes;