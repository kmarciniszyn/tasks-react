import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDoneTasks: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDoneTasks: state => {
            state.hideDoneTasks = !state.hideDoneTasks;
        },
        toggleTaskDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(task => task.id === payload);
            tasks[index].isDone = !tasks[index].isDone;
        },
        removeTask: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(task => task.id === payload);
            tasks.splice(index, 1);
        },
        markAllTasksDone: ({ tasks }) => {
            tasks.map(task => task.isDone = true);
        },
    }
});

export const {
    addTask,
    toggleHideDoneTasks,
    toggleTaskDone,
    removeTask,
    markAllTasksDone
} = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;