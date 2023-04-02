import express, { Request, Response } from 'express';
import { Question } from '../models/question';
import axios from 'axios';

const router = express.Router();

router.delete(
    '/api/questions/question/:id',
    async (req: Request, res: Response) => {
        const { id } = req.params;

        const question = await Question.findByIdAndDelete(id);

        if (!question) {
            return res.status(500).send('Question not found');
        }

        await axios
            .post('http://event-bus-svc:3000/api/events/question', {
                type: 'questionDeleted',
                questionId: id,
            })
            .catch((e) => {
                console.log(e.message);
            });

        res.send(question);
    }
);

export { router as deleteQuestionRouter };
