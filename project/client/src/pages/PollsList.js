import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PollsList = (linkPath) => {
    const [polls, setPolls] = useState({});

    const fetchPolls = async () => {
        const res = await axios.get('http://polls.local/api/polls/poll');

        setPolls(res.data);
    };
    useEffect(() => {
        fetchPolls();
    }, []);

    const renderPolls = Object.values(polls).map((poll) => {
        return (
            <div className="card" key={poll._id}>
                <div className="card-body">
                    <Link
                        to={{ pathname: `${linkPath.linkPath}${poll._id}` }}
                        className="nav-link"
                    >
                        <h3>{poll.title}</h3>
                    </Link>
                </div>
            </div>
        );
    });

    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderPolls}
        </div>
    );
};

export default PollsList;
