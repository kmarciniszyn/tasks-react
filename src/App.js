import React, { useState } from "react";
import Container from "./Container";
import Fotter from "./Fotter";
import Form from "./Form";
import Section from "./Section";
import Buttons from "./Buttons";
import Tasks from "./Tasks";
import Header from "./Header";

const tasks = [
  { id: 1, content: "testowe zadanie pierwsze", isDone: true},
  { id: 2, content: "testowe zadanie drugie", isDone: true},
];

function App() {
  const [hideDoneTasks, setHideDoneTasks] = useState(false);

  const toggleHideDoneTasks = () => {
    setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
  };

  return (
    <React.Fragment>
      <Container>
        <Header
          title="Lista zadań"
        />       
        <Section
          title="Dodaj nowe zadanie"
          body={<Form/>}
        />
        <Section
          title="Lista zadań"
          body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks}/>}
          extraHeaderContent={<Buttons hideDoneTasks={hideDoneTasks} tasks={tasks} toggleHideDoneTasks={toggleHideDoneTasks}/>}
        />     
      </Container>
      <Fotter/> 
    </React.Fragment>   
  );
}

export default App;
