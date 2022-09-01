import { Router } from 'express';
import { UserController} from './controller';


const router = Router();

const userRoutes = () => {
    /**
     * @swagger
     * /api/v1/users:
     *   get:
     *     summary: Retrieve a list of JSONPlaceholder users
     *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
    */
    router.get('', UserController.list);
    router.post('', UserController.create);
    router.patch('', UserController.partialUpdate);

    return router;
}

export default userRoutes;