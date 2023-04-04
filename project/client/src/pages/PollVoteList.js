import React from 'react';
import PollsList from './PollsList';

const PollVoteList = () => {
    return (
        <div className="container">
            <h1>Select poll to vote</h1>
            <PollsList linkPath="/vote/"></PollsList>
        </div>
    );
};

export default PollVoteList;
