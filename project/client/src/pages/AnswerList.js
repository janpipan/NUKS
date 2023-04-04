import React, { useState } from 'react';
import { Chart } from 'react-google-charts';

const AnswerList = ({ answers }) => {
    const data = [['Answer', 'Votes']];
    answers
        ?.map((answer) => {
            return [answer.answer, answer.count];
        })
        .forEach((answer) => {
            data.push(answer);
        });

    const options = {
        title: 'Results',
        is3D: true,
    };

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
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={'100%'}
                height={'400px'}
            />
        </div>
    );
};

export default AnswerList;
