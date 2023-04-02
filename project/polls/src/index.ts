import express from 'express';
import { json } from 'body-parser';
import { getPollsRouter } from './routes/polls';
import { readPollRouter } from './routes/read';
import mongoose from 'mongoose';
import cors from 'cors';
import { eventRouter } from './routes/events';

const app = express();
app.use(json());
app.use(cors());

app.use(getPollsRouter);
app.use(eventRouter);
app.use(readPollRouter);

const startdb = async () => {
    try {
        await mongoose.connect('mongodb://polls-mongo-svc:27017/polls');
        console.log('Connected to polls mongo db');
    } catch (e) {
        console.log(e);
    }
};

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

startdb();
