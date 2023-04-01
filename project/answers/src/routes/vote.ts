import express, { Request, Response } from 'express';
import { Answer } from '../models/answer';
import axios from 'axios';
import { log } from 'console';

const router = express.Router();

router.post('/api/answers/vote/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    const answer = await Answer.findById(id);

    if (!answer) {
        return res.status(500).send('Answer not found');
    }

    answer.set({
        count: ++answer.count,
    });

    await answer.save();

    console.log('Saved');

    await axios
        .post('http://event-bus-svc:3000/api/events/vote', {
            type: 'answerUpdated',
            answerId: answer._id,
            answer: answer.answer,
            count: answer.count,
            pollId: answer.pollId,
        })
        .catch((e) => {
            console.log(e.message);
        });
    console.log('event transmitted');

    res.send(answer);
});

export { router as voteRouter };
