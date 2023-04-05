import React from 'react';

const DisplayPoll = ({ poll }) => {
    return (
        <div className="container">
            <h2>{poll.title}</h2>
            <h5>Created by: {poll.author}</h5>
        </div>
    );
};

export default DisplayPoll;
