import { useDispatch, useSelector } from 'react-redux';
import { List, Item, Button, Content } from './styled';
import { selectTasks, toggleTaskDone, removeTask } from '../tasksSlice';

const TasksList = () => {
    const { tasks, hideDoneTasks } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.isDone && hideDoneTasks}
                >
                    <Button
                        toggleDone
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.isDone ? "✔" : ""}
                    </Button>
                    <Content
                        isDone={task.isDone}
                    >
                        {task.content}
                    </Content>
                    <Button
                        remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                    </Button>
                </Item>
            ))}
        </List>
    )
};

export default TasksList;