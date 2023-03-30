import express, { Request, Response } from 'express';
import { Question } from '../models/question';
import axios from 'axios';

const router = express.Router();

router.post('/api/questions/question', async (req: Request, res: Response) => {
    console.log('received');
    const { title, author, multipleAnswers, addAnswers } = req.body;

    // creates new poll and saves it to the db
    const question = Question.build({
        title,
        author,
        multipleAnswers,
        addAnswers,
    });

    await question.save();

    await axios
        .post('http://event-bus-svc:3000/api/events/question', {
            type: 'questionCreated',
            questionId: question.id,
            title,
            author,
            multipleAnswers,
            addAnswers,
        })
        .catch((e) => {
            console.log(e.message);
        });

    res.status(201).send(question);
});

export { router as createQuestionRouter };
