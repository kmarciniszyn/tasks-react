import { useState } from 'react';
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent.trim());
            setNewTaskContent("");
        }
    };

    return (
        <form
            className="form"
            onSubmit={onFormSubmit}
        >
            <input
                className="form__field"
                placeholder="Co jest do zrobienia?"
                name="newTask"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <input
                className="form__submit"
                type="submit"
                value="Dodaj zadanie"
            />
        </form>
    );
};

export default Form;