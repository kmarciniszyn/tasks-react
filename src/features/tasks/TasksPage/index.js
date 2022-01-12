import React from "react";
import Container from "../../../common/Container";
import Section from "../../../common/Section";
import Buttons from "../Buttons";
import TasksList from "../TasksList";
import Header from "../../../common/Header";
import Search from "./Search";
import Form from "./Form";

const TasksPage = () => (
    <Container>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />
      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
);


export default TasksPage;