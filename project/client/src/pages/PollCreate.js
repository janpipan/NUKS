import React, { useState } from 'react';
import axios from 'axios';

const PollCreate = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [multipleAnswers, setMultipleAnswers] = useState(false);
    const [addAnswers, setAddAnswers] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post('http://polls.local/api/questions/question', {
            title,
            author,
            multipleAnswers,
            addAnswers,
        });

        console.log({ title, author, multipleAnswers, addAnswers });

        setTitle('');
        setAuthor('');
        setMultipleAnswers(false);
        setAddAnswers(false);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Poll title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                    />
                    <label>Author</label>
                    <input
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="form-control"
                    />
                    <label>Multiple Answers</label>
                    <input
                        type="checkbox"
                        value={multipleAnswers}
                        onChange={(e) => setMultipleAnswers(e.target.checked)}
                        checked={multipleAnswers}
                    />
                    <br />
                    <label>Add Answers</label>
                    <input
                        type="checkbox"
                        value={addAnswers}
                        onChange={(e) => setAddAnswers(e.target.checked)}
                        checked={addAnswers}
                    />
                </div>
                <button className="btn btn-primary">Create</button>
            </form>
        </div>
    );
};

export default PollCreate;
