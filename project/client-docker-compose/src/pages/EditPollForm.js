import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const EditPollForm = () => {
    const poll = useLocation().state;
    const [data, setData] = useState({
        title: poll.title,
        multipleAnswers: poll.multipleAnswers,
        addAnswers: poll.addAnswers,
    });
    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.put(
            `http://212.101.137.115/api/questions/question/${poll._id}`,
            data
        );

        navigate(`/poll/${poll._id}`);
    };

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Poll title</label>
                    <input
                        className="form-control"
                        value={data.title}
                        onChange={(e) =>
                            setData({ ...data, title: e.target.value })
                        }
                    />
                    <div className="form-check">
                        <label>Multiple Answers</label>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={data.multipleAnswers}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    multipleAnswers: e.target.checked,
                                })
                            }
                            checked={data.multipleAnswers}
                        />
                    </div>
                    <div className="form-check">
                        <label>Add Answers</label>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={data.addAnswers}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    addAnswers: e.target.checked,
                                })
                            }
                            checked={data.addAnswers}
                        />
                    </div>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default EditPollForm;
