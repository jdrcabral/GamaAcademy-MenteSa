import app from "./server";
import { typeormLoader } from './loaders/typeormLoader';
import { mongooseLoader } from './loaders/mongooseLoader';
import { redisLoader } from './loaders/redisLoader';

typeormLoader();
// mongooseLoader();
redisLoader();

app.listen(3000, () => {
    console.log(`Running at ${3000}`);
});