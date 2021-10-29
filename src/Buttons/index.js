import "./style.css";

const Buttons = ({ hideDoneTasks, tasks, toggleHideDoneTasks}) => {
    if (tasks.length > 0){
        return (
            <div className="buttons">
                <button className="buttons__button" onClick={toggleHideDoneTasks}>{hideDoneTasks ? "pokaż" : "ukryj"} ukończone</button>
                <button className="buttons__button" disabled={tasks.every(({ isDone }) => isDone)}>ukończ wszystkie</button>
            </div>
        );
    }
    return null;
};

export default Buttons;