import { Wrapper, Button } from "./styled";

const Buttons = ({ hideDoneTasks, tasks, toggleHideDoneTasks, markAllTasksDone }) => {
    if (tasks.length > 0) {
        return (
            <Wrapper>
                <Button
                    onClick={toggleHideDoneTasks}
                >
                    {hideDoneTasks ? "pokaż" : "ukryj"} ukończone
                </Button>
                <Button
                    disabled={tasks.every(({ isDone }) => isDone)}
                    onClick={markAllTasksDone}
                >
                    ukończ wszystkie
                </Button>
            </Wrapper>
        );
    }
    return null;
};

export default Buttons;