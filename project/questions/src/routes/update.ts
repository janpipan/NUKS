import express, { Request, Response } from 'express';
import { Question } from '../models/question';
import axios from 'axios';

const router = express.Router();

router.put('/api/questions/question/:id', async (req, res) => {
    const question = await Question.findById(req.params.id);

    const { title, addAnswers, multipleAnswers } = req.body;

    if (!question) {
        return res.status(500).send('Question not found');
    }

    question.set({
        title: req.body.title,
        addAnswers: req.body.addAnswers,
        multipleAnswers: req.body.multipleAnswers,
    });

    await question.save();

    await axios
        .post('http://event-bus-svc:3000/api/events/question', {
            type: 'questionUpdated',
            questionId: req.params.id,
            author: question.author,
            title,
            multipleAnswers,
            addAnswers,
        })
        .catch((e) => {
            console.log(e.message);
        });

    res.send(question);
});

export { router as updateQuestionRouter };
