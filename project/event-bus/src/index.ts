import express from 'express';
import { json } from 'body-parser';
import { postEventRouter } from './routes';
import cors from 'cors';

const app = express();
app.use(json());
app.use(cors());

app.use(postEventRouter);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
