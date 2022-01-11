import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { StyledNavLink, StyledNav, StyledUl, StyledLi } from './styled';
import Author from './features/author/Author';
import TasksPage from './features/tasks/TasksPage';
import TaskPage from './features/tasks/TaskPage';
import Footer from './common/Footer';

const App = () => (
    <HashRouter>
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <StyledNavLink to="/zadania">
                        Lista zadań
                    </StyledNavLink>
                </StyledLi>
                <StyledLi>
                    <StyledNavLink to="/autor">
                        O autorze
                    </StyledNavLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>
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