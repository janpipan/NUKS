import express from 'express';
import { json } from 'body-parser';
import { getAnswerRouter } from './routes';
import { readAnswerRouter } from './routes/read';
import { createAnswerRouter } from './routes/create';
import { updateAnswerRouter } from './routes/update';
import mongoose from 'mongoose';

const app = express();
app.use(json());

app.use(getAnswerRouter);
app.use(createAnswerRouter);
app.use(updateAnswerRouter);
app.use(readAnswerRouter);

const startdb = async () => {
    try {
        await mongoose.connect('mongodb://answers-mongo-svc:27017/answers');
        console.log('Connected to answer mongo db');
    } catch (e) {
        console.log(e);
    }
};

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

startdb();
