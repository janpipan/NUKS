import express, { Request, Response } from 'express';
import { Answer } from '../models/answer';

const router = express.Router();

router.post('/api/answers/:pollId', async (req: Request, res: Response) => {
    const { answer } = req.body;
    const { pollId } = req.params;

    // creates answer and save it
    const answerObj = Answer.build({ answer, count: 0, pollId });

    await answerObj.save();

    res.status(201).send(answerObj);
});

export { router as createAnswerRouter };
