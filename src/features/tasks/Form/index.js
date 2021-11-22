import { nanoid } from '@reduxjs/toolkit';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../tasksSlice';
import { Wrapper, Field, Submit } from './styled';

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const newTaskInputRef = useRef(null);
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();

        if (trimmedNewTaskContent !== "") {
            dispatch(addTask({
                id: nanoid(),
                content: trimmedNewTaskContent,
                isDone: false,
            }));

            setNewTaskContent("");
            newTaskInputRef.current.focus();
        }
    };

    return (
        <Wrapper
            onSubmit={onFormSubmit}
        >
            <Field
                ref={newTaskInputRef}
                placeholder="Co jest do zrobienia?"
                name="newTask"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Submit
                type="submit"
                value="Dodaj zadanie"
            />
        </Wrapper>
    );
};

export default Form;