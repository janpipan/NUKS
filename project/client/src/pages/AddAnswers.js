import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DisplayPoll from './DisplayPoll';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddAnswers = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [answers, setAnswer] = useState(3);
    const [data, setData] = useState(
        Array.from(Array(answers)).map((x, index) => {
            return {
                answer: '',
            };
        })
    );

    const onSubmit = async (event) => {
        event.preventDefault();

        data.forEach(async (answer, index) => {
            if (answer.answer !== '') {
                await axios.post(
                    `http://polls.local/api/answers/answer/${state._id}`,
                    answer
                );
                updateData(index, '');
            }
        });

        navigate('/');
    };

    const onButtonClick = (event) => {
        setAnswer(answers + 1);
        setData((data) => [...data, { answer: '' }]);
    };

    const updateData = (i, value) => {
        const newState = data.map((answer, index) => {
            if (index === i) {
                return { answer: value };
            }
            return answer;
        });
        setData(newState);
    };

    return (
        <div className="container mt-3">
            <h3>Add answers</h3>
            <DisplayPoll poll={state} />
            <div className="container">
                <form onSubmit={onSubmit}>
                    <ul className="list-group">
                        {Array.from(Array(answers)).map((x, index) => {
                            return (
                                <li className="list-group-item" key={index}>
                                    <div className="form-group">
                                        <label>Answer {index + 1}</label>
                                        <input
                                            value={data[index].answer}
                                            onChange={(e) =>
                                                updateData(
                                                    index,
                                                    e.target.value
                                                )
                                            }
                                            className="form-control"
                                            type="text"
                                        />
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    <button className="btn btn-primary mt-2 mb-2">
                        Submit
                    </button>
                </form>
                <button className="btn btn-secondary" onClick={onButtonClick}>
                    Add
                </button>
            </div>
        </div>
    );
};

export default AddAnswers;
