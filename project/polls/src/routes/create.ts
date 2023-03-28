import express, { Request, Response } from 'express';
import { Poll } from '../models/poll';

const router = express.Router();

router.post('/api/polls', async (req: Request, res: Response) => {
    const { title, author, multipleAnswers, addAnswers } = req.body;

    // creates new poll and saves it to the db
    const poll = Poll.build({ title, author, multipleAnswers, addAnswers });

    await poll.save();

    res.status(201).send(poll);
});

export { router as createPollRouter };
