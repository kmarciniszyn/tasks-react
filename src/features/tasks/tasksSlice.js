import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDoneTasks: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: newTask }) => {
            tasks.push(newTask);
        },
        toggleHideDoneTasks: state => {
            state.hideDoneTasks = !state.hideDoneTasks;
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(task => task.id === taskId);
            tasks[index].isDone = !tasks[index].isDone;
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(task => task.id === taskId);
            tasks.splice(index, 1);
        },
        markAllTasksDone: ({ tasks }) => {
            tasks.map(task => task.isDone = true);
        },
        fetchSampleTasks: () =>{},
        setTasks: (state, {payload: tasks}) => {
            state.tasks = tasks;
        },
    }
});

export const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDoneTasks = state => selectTasksState(state).hideDoneTasks;
export const selectIsEveryTasksDone = state => selectTasks(state).every(({ isDone }) => isDone);
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;

export const selectTaskById = (state, taskId) => selectTasks(state).find(({ id }) => id === taskId);

export const selectTaskByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if(!query || query.trim() === ""){
        return tasks;
    }

    return tasks.filter(({content}) => content.toUpperCase().includes(query.toUpperCase()));
};

export const {
    addTask,
    toggleHideDoneTasks,
    toggleTaskDone,
    removeTask,
    markAllTasksDone,
    fetchSampleTasks,
    setTasks,
} = tasksSlice.actions;

export default tasksSlice.reducer;