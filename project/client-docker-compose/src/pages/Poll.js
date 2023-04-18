import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DisplayPoll from './DisplayPoll';
import AnswerList from './AnswerList';
import DeletePoll from './DeletePoll';
import axios from 'axios';
import { Chart } from 'react-google-charts';
import { useNavigate } from 'react-router-dom';

const Poll = () => {
    const { id } = useParams();
    const [poll, setPoll] = useState({});
    const [data, setData] = useState([['Answer', 'Votes']]);
    const navigate = useNavigate();

    const options = {
        title: 'Results',
        is3D: true,
    };

    const fetchPoll = async () => {
        const res = await axios.get(`http://212.101.137.115/api/polls/poll/${id}`);
        setPoll(res.data);
        res.data.answers
            ?.map((answer) => {
                return [answer.answer, answer.count];
            })
            .forEach((answer) => {
                setData((data) => [...data, answer]);
            });
    };

    const onClick = () => {
        navigate(`/edit/${id}`, { state: poll });
    };

    useEffect(() => {
        fetchPoll();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container mt-3">
            <DisplayPoll poll={poll} />
            <AnswerList answers={poll.answers} />
            <div className="container mt-3 d-flex justify-content-between">
                <button className="btn btn-primary" onClick={onClick}>
                    Edit
                </button>
                <DeletePoll pollId={id} />
            </div>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={'100%'}
                height={'400px'}
            />
        </div>
    );
};

export default Poll;
