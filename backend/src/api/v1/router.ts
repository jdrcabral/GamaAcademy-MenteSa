import { Express } from 'express';
import UserRouter from './users/router';
import AuthRouter from './auth/router';
import { AuthController } from './auth/controller';

const configureRoutes =  (app: Express) => {
    // app.use('/api/v1/auth', AuthRouter());
    app.post('/api/v1/auth/login', AuthController.login)
    app.use('/api/v1/users', UserRouter());
}

export default configureRoutes;