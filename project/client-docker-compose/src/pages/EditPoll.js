import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditPollForm from './EditPollForm';
import axios from 'axios';
import DisplayPoll from './DisplayPoll';

const EditPoll = () => {
    const { id } = useParams();
    const [poll, setPoll] = useState({});

    const fetchPoll = async () => {
        const res = await axios.get(`http://212.101.137.115/api/polls/poll/${id}`);
        setPoll(res.data);
    };

    useEffect(() => {
        fetchPoll();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container">
            <DisplayPoll poll={poll} />
            <EditPollForm poll={poll} />
        </div>
    );
};

export default EditPoll;
