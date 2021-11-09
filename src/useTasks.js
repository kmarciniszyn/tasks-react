import { useState, useEffect } from "react";

const getTasksFromLocalStorage = () => {
    const tasksFromLocalStorage = localStorage.getItem("tasks");
  
    return (tasksFromLocalStorage
      ? JSON.parse(tasksFromLocalStorage)
      : []);
  };

export const useTasks = () => {
    const [tasks, setTasks] = useState(getTasksFromLocalStorage);
  
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    
    const addNewTask = (newTaskContent) => {
      setTasks(tasks => [
        ...tasks,
        {
          id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
          content: newTaskContent,
          isDone: false
        },
      ]);
    };
  
    const removeTask = (taskId) => {
      setTasks(tasks => tasks.filter(task => task.id !== taskId));
    };
  
    const toggleTaskDone = (taskId) => {
      setTasks(tasks => tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, isDone: !task.isDone };
        }
  
        return task;
      }));
    };
  
    const markAllTasksDone = () => {
      setTasks(tasks => tasks.map(task => ({ ...task, isDone: true, })));
    };
  
    return {
      tasks,
      addNewTask,
      toggleTaskDone,
      removeTask,
      markAllTasksDone,
    };
  };