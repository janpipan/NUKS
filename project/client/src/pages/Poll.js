import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DisplayPoll from './DisplayPoll';
import AnswerList from './AnswerList';
import axios from 'axios';

const Poll = () => {
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
            <DisplayPoll poll={poll} />
            <AnswerList answers={poll.answers} />
        </div>
    );
};

export default Poll;
