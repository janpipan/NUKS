import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PollCreate = () => {
    const [data, setData] = useState({
        title: '',
        author: '',
        multipleAnswers: false,
        addAnswers: false,
    });
    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();

        const res = await axios.post(
            'http://polls.local/api/questions/question',
            data
        );
        setData({
            title: '',
            author: '',
            multipleAnswers: false,
            addAnswers: false,
        });

        navigate(`/create/answers/${res.data._id}`, { state: res.data });
    };

    return (
        <div className="container mt-3">
            <h3>Create new poll</h3>
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
                </div>
                <div className="form-group">
                    <label>Author</label>
                    <input
                        className="form-control"
                        value={data.author}
                        onChange={(e) =>
                            setData({ ...data, author: e.target.value })
                        }
                    />
                </div>
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
                <button className="btn btn-primary">Create</button>
            </form>
        </div>
    );
};

export default PollCreate;
