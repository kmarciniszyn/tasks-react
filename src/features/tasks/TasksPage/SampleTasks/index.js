import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchSampleTasks } from '../../tasksSlice';
import Button from '../Button';

const SampleTasks = () => {
    const dispatch = useDispatch();

    return (
        <Button
            onClick={() => dispatch(fetchSampleTasks())}
        >
            pobierz przykładowe zadania
        </Button>
    )
};

export default SampleTasks;