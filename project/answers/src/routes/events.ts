import express, { Request, Response } from 'express';
import { Event } from '../events/event';

const router = express.Router();

router.post('/api/answers/events', async (req: Request, res: Response) => {
    const event = <Event>req.body;

    if (event.eventType == 'answer') {
        console.log('event received');
    }
});

export { router as eventRouter };
