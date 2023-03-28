import mongoose from 'mongoose';

interface PollAttrs {
    title: string;
    author: string;
    multipleAnswers: boolean;
    addAnswers: boolean;
}

interface PollModel extends mongoose.Model<PollDoc> {
    build(attrs: PollAttrs): PollDoc;
}

interface PollDoc extends mongoose.Document {
    title: string;
    author: string;
    multipleAnswers: boolean;
    addAnswers: boolean;
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
});

pollSchema.statics.build = (attrs: PollAttrs) => {
    return new Poll(attrs);
};

const Poll = mongoose.model<PollDoc, PollModel>('Poll', pollSchema);

export { Poll };
