import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AnswersForm from './AnswersForm';
import DisplayPoll from './DisplayPoll';

const Vote = () => {
    const { id } = useParams();
    const [poll, setPoll] = useState({});

    const fetchPoll = async () => {
        const res = await axios.get(`http://polls.local/api/polls/poll/${id}`);
        setPoll(res.data);
    };

    useEffect(() => {
        fetchPoll();
    }, []);

    return (
        <div className="container">
            <DisplayPoll poll={poll}></DisplayPoll>
            <AnswersForm answers={poll.answers} pollId={id} />
        </div>
    );
};

export default Vote;
