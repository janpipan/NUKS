import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeletePoll = ({ pollId }) => {
    const navigate = useNavigate();

    const onClick = async (event) => {
        event.preventDefault();
        await axios.delete(
            `http://212.101.137.115/api/questions/question/${pollId}`
        );

        navigate('/');
    };

    return (
        <button onClick={onClick} className="btn btn-danger ">
            Delete
        </button>
    );
};

export default DeletePoll;
