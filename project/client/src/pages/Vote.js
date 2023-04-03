import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AnswersList from './AnswersList';
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
        <div>
            <DisplayPoll poll={poll}></DisplayPoll>
            <form action="">
                <AnswersList answers={poll.answers} />
            </form>
        </div>
    );
};

export default Vote;
