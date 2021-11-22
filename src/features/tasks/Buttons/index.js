import { useDispatch, useSelector } from "react-redux";
import { Wrapper, Button } from "./styled";
import { selectTasks, toggleHideDoneTasks, markAllTasksDone } from "../tasksSlice";

const Buttons = () => {
    const { tasks, hideDoneTasks } = useSelector(selectTasks);
    const dispatch = useDispatch();

    if (tasks.length > 0) {
        return (
            <Wrapper>
                <Button
                    onClick={() => dispatch(toggleHideDoneTasks())}
                >
                    {hideDoneTasks ? "pokaż" : "ukryj"} ukończone
                </Button>
                <Button
                    disabled={tasks.every(({ isDone }) => isDone)}
                    onClick={() => dispatch(markAllTasksDone())}
                >
                    ukończ wszystkie
                </Button>
            </Wrapper>
        );
    }
    return null;
};

export default Buttons;