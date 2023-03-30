import express, { Request, Response } from 'express';
import { Answer } from '../models/answer';

const router = express.Router();

router.get('/api/answers/answer/:id', async (req: Request, res: Response) => {
    const answer = await Answer.findById(req.params.id);

    res.send(answer);
});

export { router as readAnswerRouter };
