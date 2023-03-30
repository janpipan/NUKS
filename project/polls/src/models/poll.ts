import mongoose from 'mongoose';

interface AnswerAttrs {
    answer: string;
    count: number;
    pollId: string;
}

interface PollAttrs {
    title: string;
    author: string;
    multipleAnswers: boolean;
    addAnswers: boolean;
    answers: AnswerAttrs[];
}

interface PollModel extends mongoose.Model<PollDoc> {
    build(attrs: PollAttrs): PollDoc;
}

interface PollDoc extends mongoose.Document {
    title: string;
    author: string;
    multipleAnswers: boolean;
    addAnswers: boolean;
    answers: AnswerAttrs[];
}

const pollSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: false,
    },
    multipleAnswers: {
        type: Boolean,
        required: true,
    },
    addAnswers: {
        type: Boolean,
        required: true,
    },
    answers: [
        {
            answer: {
                type: String,
                required: true,
            },
            count: {
                type: Number,
                required: true,
            },
            pollId: {
                type: String,
                required: true,
            },
        },
    ],
});

pollSchema.statics.build = (attrs: PollAttrs) => {
    return new Poll(attrs);
};

const Poll = mongoose.model<PollDoc, PollModel>('Poll', pollSchema);

export { Poll };
