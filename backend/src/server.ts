import express from 'express';

import ApiV1Router from './api/v1/router';

const app = express();

app.use(express.json());

ApiV1Router(app);

export default app;
