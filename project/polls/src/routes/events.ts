import express, { Request, Response } from 'express';
import { Event } from '../events/event';
import { Question } from '../models/question';
import { Answer } from '../models/answer';
import { Poll } from '../models/poll';

const router = express.Router();

router.post('/api/polls/events', async (req: Request, res: Response) => {
    console.log('event received');
    const { eventType, data } = <Event>req.body;

    if (eventType === 'answer') {
        if (data.type === 'answerCreated') {
        }
    } else if (eventType === 'question') {
        if (data.type === 'questionCreated') {
            const { title, author, multipleAnswers, addAnswers } = <Question>(
                data
            );
            const poll = Poll.create({
                title,
                author,
                multipleAnswers,
                addAnswers,
                answers: [],
            });
        } else if (data.type === 'questionUpdated') {
        }
    }
});

export { router as eventRouter };
