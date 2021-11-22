import React, { useState } from "react";
import Container from "../../common/Container";
import Footer from "../../common/Footer";
import Form from "./Form";
import Section from "../../common/Section";
import Buttons from "./Buttons";
import TasksList from "./TasksList";
import Header from "../../common/Header";
import { useTasks } from "../../useTasks";

function Tasks() {
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
            <TasksList
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

export default Tasks;
