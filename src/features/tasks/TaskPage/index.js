import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from '../../../common/Container';
import Section from '../../../common/Section';
import Header from '../../../common/Header';
import { selectTaskById } from '../tasksSlice';

const TaskPage = () => {
    const { id } = useParams();
    const task = useSelector(state => selectTaskById(state, id));

    return (
        <Container>
            <Header
                title="Szczegóły zadania"
            />
            <Section
                title={task ? task.content : "Nie znaleziono takiego zadania :("}
                body={
                    <>
                        <strong>Ukończono:</strong> {task ? (task.isDone ? "tak" : "nie") : "-"}
                    </>
                }
            />
        </Container>
    )
};

export default TaskPage;