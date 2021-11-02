import "./style.css";

const Tasks = ({ tasks, hideDoneTasks, toggleTaskDone }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`tasks__item${(task.isDone && hideDoneTasks)
                        ? " tasks__item--hidden"
                        : ""}
                    `}
            >
                <button
                    className="tasks__button tasks__button--toggleTask"
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.isDone ? "✔" : ""}
                </button>
                <span
                    className={task.isDone ? "tasks__item--special" : ""}
                >
                    {task.content}
                </span>
                <button
                    className="tasks__button tasks__button--remove"
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;