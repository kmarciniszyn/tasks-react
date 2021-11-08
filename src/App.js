import React, { useState, useEffect } from "react";
import Container from "./Container";
import Footer from "./Footer";
import Form from "./Form";
import Section from "./Section";
import Buttons from "./Buttons";
import Tasks from "./Tasks";
import Header from "./Header";

const getTasksFromLocalStorage = () => {
  const tasksFromLocalStorage = localStorage.getItem("tasks");

  return (tasksFromLocalStorage
    ? JSON.parse(tasksFromLocalStorage)
    : []);
};

function App() {

  const [hideDoneTasks, setHideDoneTasks] = useState(false);
  const [tasks, setTasks] = useState(getTasksFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleHideDoneTasks = () => {
    setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
  };

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

  return (
    <React.Fragment>
      <Container>
        <Header
          title="Lista zadań"
        />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form addNewTask={addNewTask} />}
        />
        <Section
          title="Lista zadań"
          body={
            <Tasks
              tasks={tasks}
              hideDoneTasks={hideDoneTasks}
              toggleTaskDone={toggleTaskDone}
              removeTask={removeTask}
            />
          }
          extraHeaderContent={
            <Buttons
              hideDoneTasks={hideDoneTasks}
              tasks={tasks}
              toggleHideDoneTasks={toggleHideDoneTasks}
              markAllTasksDone={markAllTasksDone}
            />
          }
        />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;
