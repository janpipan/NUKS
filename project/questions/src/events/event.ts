export interface Event {
    eventType: string;
    data: {
        type: string;
        questionId: string;
        title: string;
        author: string;
        multipleAnswers: boolean;
        addAnswers: boolean;
    };
}
