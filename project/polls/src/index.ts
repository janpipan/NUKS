import express from 'express';
import { json } from 'body-parser';
import { getPollRouter } from './routes';
import { createPollRouter } from './routes/create';
import { updatePollRouter } from './routes/update';
import { readPollRouter } from './routes/read';
import mongoose from 'mongoose';

const app = express();
app.use(json());

app.use(getPollRouter);
app.use(createPollRouter);
app.use(updatePollRouter);
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
