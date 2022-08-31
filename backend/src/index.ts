import app from "./server";
import { typeormLoader } from './loaders/typeormLoader';
import { passportLoader } from './loaders/passportLoader';

typeormLoader();
passportLoader();

app.listen(3000, () => {
    console.log(`Running at ${3000}`);
});