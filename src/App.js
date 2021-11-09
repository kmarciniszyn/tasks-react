import React, { useState } from "react";
import Container from "./Container";
import Footer from "./Footer";
import Form from "./Form";
import Section from "./Section";
import Buttons from "./Buttons";
import Tasks from "./Tasks";
import Header from "./Header";
import { useTasks } from "./useTasks";

function App() {
  const [hideDoneTasks, setHideDoneTasks] = useState(false);

  const toggleHideDoneTasks = () => {
    setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
  };

  const {
    tasks,
    addNewTask,
    toggleTaskDone,
    removeTask,
    markAllTasksDone,
  } = useTasks();

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
