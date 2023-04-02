import express, { Request, Response } from 'express';
import { Poll } from '../models/poll';

const router = express.Router();

router.get('/api/polls/poll/:id', async (req: Request, res: Response) => {
    // get poll from db
    const polls = await Poll.findById(req.params.id);

    res.send(polls);
});

export { router as readPollRouter };
