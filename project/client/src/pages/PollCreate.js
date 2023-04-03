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
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Poll title</label>
                    <input
                        value={data.title}
                        onChange={(e) =>
                            setData({ ...data, title: e.target.value })
                        }
                        className="form-control"
                    />
                    <label>Author</label>
                    <input
                        value={data.author}
                        onChange={(e) =>
                            setData({ ...data, author: e.target.value })
                        }
                        className="form-control"
                    />
                    <label>Multiple Answers</label>
                    <input
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
                    <br />
                    <label>Add Answers</label>
                    <input
                        type="checkbox"
                        value={data.addAnswers}
                        onChange={(e) =>
                            setData({ ...data, addAnswers: e.target.checked })
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
