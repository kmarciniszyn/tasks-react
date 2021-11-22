import React from "react";
import Container from "../../common/Container";
import Footer from "../../common/Footer";
import Form from "./Form";
import Section from "../../common/Section";
import Buttons from "./Buttons";
import TasksList from "./TasksList";
import Header from "../../common/Header";

const Tasks = () => (
  <React.Fragment>
    <Container>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
    <Footer />
  </React.Fragment>
);


export default Tasks;