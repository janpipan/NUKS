import { Types } from 'mongoose';

export interface Question {
    type: string;
    _id: Types.ObjectId;
    questionId: string;
    title: string;
    author: string;
    multipleAnswers: boolean;
    addAnswers: boolean;
}
