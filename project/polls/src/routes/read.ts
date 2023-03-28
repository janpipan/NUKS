import express, { Request, Response } from 'express';
import { Poll } from '../models/poll';

const router = express.Router();

router.get('/api/polls/:id', async (req: Request, res: Response) => {
    const poll = await Poll.findById(req.params.id);

    res.send(poll);
});

export { router as readPollRouter };
