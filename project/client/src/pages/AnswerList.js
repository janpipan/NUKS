import React from 'react';

const AnswerList = ({ answers }) => {
    const renderAnswers = answers?.map((answer) => {
        return (
            <li className="list-group-item" key={answer.answerId}>
                <div className="d-flex justify-content-between">
                    <div className="p-1">{answer.answer}</div>
                    <div className="p-1">{answer.count}</div>
                </div>
            </li>
        );
    });

    return (
        <div className="container">
            <ul className="list-group">{renderAnswers}</ul>
        </div>
    );
};

export default AnswerList;
