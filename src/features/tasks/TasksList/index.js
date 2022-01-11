import { useDispatch, useSelector } from 'react-redux';
import { List, Item, Button, Content, StyledLink } from './styled';
import { selectTasks, toggleTaskDone, removeTask, selectHideDoneTasks } from '../tasksSlice';

const TasksList = () => {
    const tasks = useSelector(selectTasks);
    const hideDoneTasks = useSelector(selectHideDoneTasks);
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
                        <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
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