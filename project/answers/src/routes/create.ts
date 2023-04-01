import express, { Request, Response } from 'express';
import { Answer } from '../models/answer';
import axios from 'axios';

const router = express.Router();

router.post(
    '/api/answers/answer/:pollId',
    async (req: Request, res: Response) => {
        const { answer } = req.body;
        const { pollId } = req.params;

        // creates answer and save it
        const answerObj = Answer.build({ answer, count: 0, pollId });

        await answerObj.save();

        //console.log(pollId);

        await axios
            .post('http://event-bus-svc:3000/api/events/answer', {
                type: 'answerCreated',
                answerId: answerObj._id,
                answer,
                count: 0,
                pollId,
            })
            .catch((e) => {
                console.log(e.message);
            });

        res.status(201).send(answerObj);
    }
);

export { router as createAnswerRouter };
