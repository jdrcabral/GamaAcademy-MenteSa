import 'reflect-metadata';
import express from 'express';

import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import ApiV1Router from './api/v1/router';
import { passportLoader } from './loaders/passportLoader';

const app = express();

passportLoader();
app.use(express.json());
const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Mente Sa',
        version: '0.0.1',
      },
    },
    apis: [`${__dirname}/api/v1/**/route*.ts`], // files containing annotations as above
};
const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
ApiV1Router(app);

export default app;
