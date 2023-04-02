import express from 'express';
import { json } from 'body-parser';
import { getQuestionRouter } from './routes';
import { createQuestionRouter } from './routes/create';
import { updateQuestionRouter } from './routes/update';
import { readQuestionRouter } from './routes/read';
import { eventRouter } from './routes/events';
import { deleteQuestionRouter } from './routes/delete';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(json());
app.use(cors());

app.use(getQuestionRouter);
app.use(createQuestionRouter);
app.use(updateQuestionRouter);
app.use(readQuestionRouter);
app.use(eventRouter);
app.use(deleteQuestionRouter);

const startdb = async () => {
    try {
        await mongoose.connect('mongodb://questions-mongo-svc:27017/questions');
        console.log('Connected to questions mongo db');
    } catch (e) {
        console.log(e);
    }
};

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

startdb();
