import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Author from './features/author/Author';
import TasksPage from './features/tasks/TasksPage';
import TaskPage from './features/tasks/TaskPage';
import Footer from './common/Footer';
import Navigation from './Navigation';
import { toTasks, toTask, toAuthor } from './routes';

const App = () => (
    <HashRouter>
        <Navigation/>
        
        <Switch>
            <Route path={toAuthor()}>
                <Author />
            </Route>
            <Route path={toTask()}>
                <TaskPage />
            </Route>
            <Route path={toTasks()}>
                <TasksPage />
            </Route>
            <Route path="/">
                <Redirect to={toTasks()} />
            </Route>
        </Switch>
        <Footer/>
    </HashRouter>
);

export default App;