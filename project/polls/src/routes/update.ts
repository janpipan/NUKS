import express, { Request, Response } from 'express';
import { Poll } from '../models/poll';

const router = express.Router();

router.put('/api/polls/:id', async (req, res) => {
    const poll = await Poll.findById(req.params.id);

    if (!poll) {
        return res.status(500).send('Poll not found');
    }

    poll.set({
        title: req.body.title,
        addAnswers: req.body.addAnswers,
        multipleAnswers: req.body.multipleAnswers,
    });

    await poll.save();

    res.send(poll);
});

export { router as updatePollRouter };
