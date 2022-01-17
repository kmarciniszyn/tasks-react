import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Author from './features/author/Author';
import TasksPage from './features/tasks/TasksPage';
import TaskPage from './features/tasks/TaskPage';
import Footer from './common/Footer';
import Navigation from './Navigation';

const App = () => (
    <HashRouter>
        <Navigation/>
        
        <Switch>
            <Route path="/autor">
                <Author />
            </Route>
            <Route path="/zadania/:id">
                <TaskPage />
            </Route>
            <Route path="/zadania">
                <TasksPage />
            </Route>
            <Route path="/">
                <Redirect to="/zadania" />
            </Route>
        </Switch>
        <Footer/>
    </HashRouter>
);

export default App;