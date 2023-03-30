import express, { Request, Response } from 'express';
import { Answer } from '../models/answer';

const router = express.Router();

router.get('/api/answers/answer', async (req: Request, res: Response) => {
    // get all polls from db
    const answers = await Answer.find({});

    res.send(answers);
});

export { router as getAnswerRouter };
