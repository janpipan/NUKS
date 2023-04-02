import express, { Request, Response } from 'express';
import { Event } from '../events/event';
import { Answer } from '../models/answer';

const router = express.Router();

router.post('/api/answers/events', async (req: Request, res: Response) => {
    const event = <Event>req.body;

    if (event.data.type == 'questionDeleted') {
        console.log('received event');
        const result = await Answer.deleteMany({
            pollId: event.data.questionId,
        });
        res.send(result);
    }
});

export { router as eventRouter };
