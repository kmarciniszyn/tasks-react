import { useDispatch, useSelector } from "react-redux";
import { Wrapper} from "./styled";
import Button from '../Button';
import { toggleHideDoneTasks, markAllTasksDone, selectHideDoneTasks, selectIsEveryTasksDone, selectAreTasksEmpty } from "../../tasksSlice";

const Buttons = () => {
    const hideDoneTasks = useSelector(selectHideDoneTasks);
    const isEveryTasksDone = useSelector(selectIsEveryTasksDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const dispatch = useDispatch();

    if (!areTasksEmpty) {
        return (
            <Wrapper>
                <Button
                    onClick={() => dispatch(toggleHideDoneTasks())}
                >
                    {hideDoneTasks ? "pokaż" : "ukryj"} ukończone
                </Button>
                <Button
                    disabled={isEveryTasksDone}
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