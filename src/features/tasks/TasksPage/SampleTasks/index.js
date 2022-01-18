import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSampleTasks } from '../../tasksSlice';
import Button from '../Button';
import { selectLoadindSampleTasks } from '../../tasksSlice';

const SampleTasks = () => {
    const dispatch = useDispatch();
    const loadingSampleTasks = useSelector(selectLoadindSampleTasks);

    return (
        <Button
            disabled={loadingSampleTasks}
            onClick={() => dispatch(fetchSampleTasks())}
        >
            {loadingSampleTasks ? "Ładowanie..." : "pobierz przykładowe zadania"}
        </Button>
    )
};

export default SampleTasks;