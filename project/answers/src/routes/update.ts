import express, { Request, Response } from 'express';
import { Answer } from '../models/answer';
import axios from 'axios';

const router = express.Router();

router.put('/api/answers/answer/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id);

    const answer = await Answer.findById(id);

    console.log(answer);

    if (!answer) {
        return res.status(500).send('Answer not found');
    }

    answer.set({
        answer: req.body.answer,
    });

    await answer.save();

    await axios
        .post('http://event-bus-svc:3000/api/events/answer', {
            type: 'answerUpdated',
            answerId: answer._id,
            answer: req.body.answer,
            pollId: answer.pollId,
        })
        .catch((e) => {
            console.log(e.message);
        });

    res.send(answer);
});

export { router as updateAnswerRouter };
