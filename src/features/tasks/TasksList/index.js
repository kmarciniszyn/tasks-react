import { useDispatch, useSelector } from 'react-redux';
import { List, Item, Button, Content, StyledLink } from './styled';
import { toggleTaskDone, removeTask, selectHideDoneTasks, selectTaskByQuery } from '../tasksSlice';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const TasksList = () => {
    const searchParams = new URLSearchParams(useLocation().search);
    const query = searchParams.get("szukaj");

    const tasks = useSelector(state => selectTaskByQuery(state, query));
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