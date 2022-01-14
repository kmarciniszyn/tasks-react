const localStorageTasksKey = "tasks";

export const saveTasksInLocalStorage = (tasks) => 
    localStorage.setItem(localStorageTasksKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () => 
    JSON.parse(localStorage.getItem(localStorageTasksKey)) || [];