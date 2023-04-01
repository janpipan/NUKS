import express, { Request, Response } from 'express';
import { Answer } from '../db/models/answer';
import { Question } from '../db/models/question';
import { Event } from '../events/event';
import axios from 'axios';

Answer.sync({ alter: true });
Question.sync({ alter: true });

const router = express.Router();

const sendEvent = (event: Event, services: string[][]): void => {
    services.forEach((service) => {
        const path = `http://${service[0]}:3000${service[1]}`;
        console.log(path);

        axios.post(path, event).catch((e) => {
            console.log(e.message);
        });
    });
};

const services = [
    ['polls-svc', '/api/polls/events'],
    ['questions-svc', '/api/questions/events'],
    ['answers-svc', '/api/answers/events'],
];

router.get('/api/events/', (req: Request, res: Response) => {});

router.post('/api/events/answer', async (req: Request, res: Response) => {
    const event = <Answer>req.body;
    console.log(req.body);
    if (event.type === 'answerUpdated') {
        const answer = await Answer.findOne({
            where: { answerId: event.answerId, type: 'answerUpdated' },
        });
        if (answer) {
            const result = answer.update({ answer: event.answer });
            sendEvent({ eventType: 'answer', data: event }, services);
            res.status(201).json({ result });
        } else {
            const result = await Answer.create(event);
            sendEvent({ eventType: 'answer', data: event }, services);
            res.status(201).json({ result });
        }
    } else {
        const result = await Answer.create(event);
        sendEvent({ eventType: 'answer', data: event }, services);
        res.status(201).json({ result });
    }
});

router.post('/api/events/vote', async (req: Request, res: Response) => {
    const event = <Answer>req.body;
    const answer = await Answer.findOne({
        where: { answerId: event.answerId, type: 'answerUpdated' },
    });

    if (answer) {
        const result = answer.update({ count: event.count });
        sendEvent({ eventType: 'answer', data: event }, services);
        return res.status(200).json({ result });
    }
});

router.post('/api/events/question', async (req: Request, res: Response) => {
    const event = <Question>req.body;
    const result = await Question.create(event);
    sendEvent({ eventType: 'question', data: event }, services);
    res.status(201).json({ result });
});

export { router as postEventRouter };
