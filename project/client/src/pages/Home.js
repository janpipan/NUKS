import React from 'react';
import PollsList from './PollsList';

export default function Home() {
    return (
        <div className="container">
            <h1>Polls</h1>
            <PollsList linkPath={'/poll/'} />
        </div>
    );
}
