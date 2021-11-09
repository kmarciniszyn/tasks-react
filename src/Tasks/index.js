import { List, Item, Button, Content } from './styled';

const Tasks = ({ tasks, hideDoneTasks, toggleTaskDone, removeTask }) => (
    <List>
        {tasks.map(task => (
            <Item
                key={task.id}
                hidden={task.isDone && hideDoneTasks}
            >
                <Button
                    toggleDone
                    onClick={() => toggleTaskDone(task.id)}
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
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </Button>
            </Item>
        ))}
    </List>
);

export default Tasks;