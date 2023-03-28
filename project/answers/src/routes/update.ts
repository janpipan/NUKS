import express, { Request, Response } from 'express';
import { Answer } from '../models/answer';

const router = express.Router();

router.put('/api/answers/:id', async (req, res) => {
    const answer = await Answer.findById(req.params.id);

    if (!answer) {
        return res.status(500).send('Answer not found');
    }

    answer.set({
        answer: req.body.answer,
    });

    await answer.save();

    res.send(answer);
});

export { router as updateAnswerRouter };
