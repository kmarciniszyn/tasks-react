import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    &.${activeClassName} {
        font-weight: bold;
    }

    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};    
`;

export const StyledNav = styled.nav`
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const StyledUl = styled.ul`
    list-style-type: none;
    padding-left: 0px;
    margin: 0px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const StyledLi = styled.li`
    margin: 20px;
`;
