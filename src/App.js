import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { StyledNavLink, StyledNav, StyledUl, StyledLi } from './styled';
import Author from './features/author/Author';
import Tasks from './features/tasks/Tasks';

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
            <Route path="/zadania">
                <Tasks />
            </Route>
            <Route path="/">
                <Redirect to="/zadania"/>
            </Route>
        </Switch>
    </HashRouter>
);

export default App;