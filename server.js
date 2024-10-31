import express from 'express';
import bodyParser from 'body-parser'

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.listen(port, () =>
    console.log(
        `Server lari-lari di port : http://localhost:${port}`));
 