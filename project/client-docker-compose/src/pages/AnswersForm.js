import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AnswersForm = ({ answers, multipleAnswers, pollId }) => {
    const navigate = useNavigate();
    const [data, setData] = useState('');

    const typeInput = multipleAnswers ? 'checkbox' : 'radio';

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post(`http://212.101.137.115/api/answers/vote/${data}`);
        setData('');

        navigate(`/poll/${pollId}`);
    };

    const renderAnswers = answers?.map((answer) => {
        return (
            <li className="list-group-item" key={answer.answerId}>
                <div className="form-check">
                    <input
                        value={answer.answerId}
                        type={typeInput}
                        name="answer"
                        className="form-check-input"
                        onChange={(e) => setData(e.target.value)}
                    />
                    <label className="form-check-label">{answer.answer}</label>
                </div>
            </li>
        );
    });

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <ul className="list-group">{renderAnswers}</ul>
                <button className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    );
};

export default AnswersForm;
