import mongoose from 'mongoose';

interface AnswerAttrs {
    answer: string;
    count: number;
    pollId: string;
}

interface AnswerModel extends mongoose.Model<AnswerDoc> {
    build(attrs: AnswerAttrs): AnswerDoc;
}

interface AnswerDoc extends mongoose.Document {
    answer: string;
    count: number;
    pollId: string;
}

const answerSchema = new mongoose.Schema({
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
});

answerSchema.statics.build = (attrs: AnswerAttrs) => {
    return new Answer(attrs);
};

const Answer = mongoose.model<AnswerDoc, AnswerModel>('Answer', answerSchema);

export { Answer };
