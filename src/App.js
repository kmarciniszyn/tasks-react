import React, { useState } from "react";
import Container from "./Container";
import Fotter from "./Fotter";
import Form from "./Form";
import Section from "./Section";
import Buttons from "./Buttons";
import Tasks from "./Tasks";
import Header from "./Header";


function App() {
  const [hideDoneTasks, setHideDoneTasks] = useState(false);
  const [tasks, setTasks] = useState([]);

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
          body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
          extraHeaderContent={<Buttons hideDoneTasks={hideDoneTasks} tasks={tasks} toggleHideDoneTasks={toggleHideDoneTasks} />}
        />
      </Container>
      <Fotter />
    </React.Fragment>
  );
}

export default App;
