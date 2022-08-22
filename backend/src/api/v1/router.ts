import { Express } from 'express';
import UserRouter from './users/router';


const configureRoutes =  (app: Express) => {

    app.use('/api/v1/users', UserRouter());
}

export default configureRoutes;