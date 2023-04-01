import { Question } from '../models/question';
import { Answer } from '../models/answer';
import { Poll } from '../models/poll';
import { Event } from './event';
import { Types } from 'mongoose';

export async function eventHandler(event: Event) {
    const { eventType, data } = <Event>event;

    if (eventType === 'answer') {
        console.log('answer event Received');
        const { pollId, answerId, answer } = <Answer>data;

        // find poll
        const poll = await Poll.findById(pollId);
        // if poll exists push it to poll
        if (poll) {
            if (data.type === 'answerCreated') {
                poll.answers.push(<Answer>data);
                await poll.save();
            } else if (data.type === 'answerUpdated') {
                const result = await Poll.updateOne(
                    { _id: pollId, 'answers.answerId': answerId },
                    { $set: { 'answers.$.answer': answer } }
                );
                console.log(result);
            }
        }
    } else if (eventType === 'question') {
        if (data.type === 'questionCreated') {
            const { title, author, multipleAnswers, addAnswers } = <Question>(
                data
            );

            const poll = await Poll.create({
                _id: data.questionId,
                title,
                author,
                multipleAnswers,
                addAnswers,
                answers: [],
            });
        } else if (data.type === 'questionUpdated') {
            const { title, multipleAnswers, addAnswers } = <Question>data;

            const poll = await Poll.findById(data.questionId);

            if (poll) {
                poll.set({
                    title,
                    multipleAnswers,
                    addAnswers,
                });

                await poll.save();
            }
        }
    }
}
