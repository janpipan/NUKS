import express, { Request, Response } from 'express';
import { Question } from '../models/question';

const router = express.Router();

router.get('/api/questions/question', async (req: Request, res: Response) => {
    // get all polls from db
    const questions = await Question.find({});

    res.send(questions);
});

export { router as getQuestionRouter };
