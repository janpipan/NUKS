import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PollCreate from './pages/PollCreate';
import Nav from './pages/Nav';
import Home from './pages/Home';
import Vote from './pages/Vote';
import AddAnswers from './pages/AddAnswers';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav />}>
                    <Route index element={<Home />} />
                    <Route path="create">
                        <Route index element={<PollCreate />} />
                        <Route path="answers/:id" element={<AddAnswers />} />
                    </Route>

                    <Route path="vote/:id" element={<Vote />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
