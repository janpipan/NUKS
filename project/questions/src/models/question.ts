import mongoose from 'mongoose';

interface QuestionAttrs {
    title: string;
    author: string;
    multipleAnswers: boolean;
    addAnswers: boolean;
}

interface QuestionModel extends mongoose.Model<QuestionDoc> {
    build(attrs: QuestionAttrs): QuestionDoc;
}

interface QuestionDoc extends mongoose.Document {
    title: string;
    author: string;
    multipleAnswers: boolean;
    addAnswers: boolean;
}

const questionSchema = new mongoose.Schema({
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
});

questionSchema.statics.build = (attrs: QuestionAttrs) => {
    return new Question(attrs);
};

const Question = mongoose.model<QuestionDoc, QuestionModel>(
    'Question',
    questionSchema
);

export { Question };
