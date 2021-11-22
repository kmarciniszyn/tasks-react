import { useState, useRef } from 'react';
import { Wrapper, Field, Submit } from './styled';

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const newTaskInputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();

        if (trimmedNewTaskContent !== "") {
            addNewTask(trimmedNewTaskContent);
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