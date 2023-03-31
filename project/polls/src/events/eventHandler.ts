import { Question } from '../models/question';
import { Answer } from '../models/answer';
import { Poll } from '../models/poll';
import { Event } from './event';

export async function eventHandler(event: Event) {
    const { eventType, data } = <Event>event;

    if (eventType === 'answer') {
        console.log('answer event Received');
        if (data.type === 'answerCreated') {
            const { pollId } = <Answer>data;
            // find poll
            const poll = await Poll.findById(pollId);
            // if poll exists push it to poll
            if (poll) {
                poll.answers.push(<Answer>data);
                await poll.save();
            }
        }
    } else if (eventType === 'question') {
        console.log('question event Received');

        if (data.type === 'questionCreated') {
            const { title, questionId, author, multipleAnswers, addAnswers } = <
                Question
            >data;
            const poll = await Poll.create({
                _id: questionId,
                title,
                author,
                multipleAnswers,
                addAnswers,
                answers: [],
            });
        } else if (data.type === 'questionUpdated') {
        }
    }
}
