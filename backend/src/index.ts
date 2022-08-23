import app from "./server";
import { typeormLoader } from './loaders/typeormLoader';

typeormLoader();

app.listen(3000, () => {
    console.log(`Running at ${3000}`);
});