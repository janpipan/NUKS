import express, { Request, Response } from 'express';
import { Question } from '../models/question';

const router = express.Router();

router.get(
    '/api/questions/question/:id',
    async (req: Request, res: Response) => {
        const question = await Question.findById(req.params.id);

        res.send(question);
    }
);

export { router as readQuestionRouter };
