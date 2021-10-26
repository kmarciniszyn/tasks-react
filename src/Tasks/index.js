import "./style.css";

const Tasks = ({ tasks }) => (
    <ul className="tasks">        
        {tasks.map(task => (
            <li key={task.id} className="tasks__item">
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