import express, { Request, Response } from 'express';
import { Answer } from '../models/answer';
import axios from 'axios';

const router = express.Router();

router.delete(
    '/api/answers/answer/:id',
    async (req: Request, res: Response) => {
        const { id } = req.params;
        console.log(id);

        const answer = await Answer.findByIdAndDelete(id);

        if (!answer) {
            return res.status(500).send('Answer not found');
        }

        console.log(answer);

        await axios
            .post('http://event-bus-svc:3000/api/events/answer', {
                type: 'answerDeleted',
                answerId: answer._id,
                pollId: answer.pollId,
            })
            .catch((e) => {
                console.log(e.message);
            });

        res.send(answer);
    }
);

export { router as deleteRouter };
