import express, { Request, Response } from 'express';
import { Event } from '../events/event';
import { eventHandler } from '../events/eventHandler';

const router = express.Router();

router.post('/api/polls/events', async (req: Request, res: Response) => {
    console.log('event received');
    const event = <Event>req.body;

    eventHandler(event);

    res.send('added');
});

export { router as eventRouter };
