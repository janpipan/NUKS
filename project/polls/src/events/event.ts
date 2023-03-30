import { Question } from '../models/question';
import { Answer } from '../models/answer';

export interface Event {
    eventType: string;
    data: Question | Answer;
}
