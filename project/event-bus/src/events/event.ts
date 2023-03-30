import { Question } from '../db/models/question';
import { Answer } from '../db/models/answer';

export interface Event {
    eventType: string;
    data: Question | Answer;
}
