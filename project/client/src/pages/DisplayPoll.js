import React from 'react';

const DisplayPoll = ({ poll }) => {
    return (
        <div>
            <h3>{poll.title}</h3>
            <h4>{poll.author}</h4>
        </div>
    );
};

export default DisplayPoll;
