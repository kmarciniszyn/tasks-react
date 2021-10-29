import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="tasks">        
        {tasks.map(task => (
            <li key={task.id} className={`tasks__item${(task.isDone && hideDoneTasks) ? " tasks__item--hidden" : ""}`}>
                <button className="tasks__button tasks__button--toggleTask">
                    {task.isDone ? "✔" : ""}
                </button>
                <span {...task.isDone ? "className=\"tasks__item--special\"" : ""}>
                    {task.content}
                </span>
                <button className="tasks__button tasks__button--remove">
                    🗑
                </button>
            </li>             
        ))}        
    </ul>
);

export default Tasks;