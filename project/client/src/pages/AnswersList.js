import React from 'react';

const AnswersList = ({ answers }) => {
    const renderAnswers = answers?.map((answer) => {
        return (
            <div key={answer.answerId}>
                <li>
                    {answer.answer} {answer.count}
                </li>
            </div>
        );
    });

    return <ul>{renderAnswers}</ul>;
};

export default AnswersList;
