import express, { Request, Response } from 'express';
import { Event } from '../events/event';
import { Question } from '../models/question';

const router = express.Router();

router.post('/api/questions/events', async (req: Request, res: Response) => {
    const { eventType, data } = <Event>req.body;

    if (eventType === 'question') {
        console.log('event received');

        // check if question exists
        /* const question = await Question.findById(data.questionId);
        if (question) {
        } */
    }
    res.status(200);
});

export { router as eventRouter };
