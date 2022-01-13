import React from "react";
import Container from "../../../common/Container";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Buttons from "./Buttons";
import TasksList from "../TasksList";
import Search from "./Search";
import Form from "./Form";
import SampleTasks from "./SampleTasks";

const TasksPage = () => (
    <Container>
        <Header
            title="Lista zadań"
        />
        <Section
            title="Dodaj nowe zadanie"
            body={<Form />}
            extraHeaderContent={<SampleTasks />}
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