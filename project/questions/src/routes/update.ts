import express, { Request, Response } from 'express';
import { Question } from '../models/question';

const router = express.Router();

router.put('/api/questions/question/:id', async (req, res) => {
    const question = await Question.findById(req.params.id);

    if (!question) {
        return res.status(500).send('Question not found');
    }

    question.set({
        title: req.body.title,
        addAnswers: req.body.addAnswers,
        multipleAnswers: req.body.multipleAnswers,
    });

    await question.save();

    res.send(question);
});

export { router as updateQuestionRouter };
