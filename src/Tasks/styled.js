import styled, { css } from "styled-components";

export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    padding: 10px;
    border-bottom: 2px solid #eee;
    grid-gap: 20px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Button = styled.button`
    color: white;
    border: none;
    width: 30px;
    height: 30px;
    transition: 0.5s;

    ${({ remove }) => remove && css`
        background-color: hsl(0, 100%, 40%);

        &:hover{
            background-color: hsl(0, 100%, 60%);
        }
    `}

    ${({ toggleDone }) => toggleDone && css`
        background-color: hsl(120, 100%, 25%);

        &:hover {
            background-color: hsl(120, 100%, 35%);
        }
    `}
`;

export const Content = styled.span`
    ${({ isDone }) => isDone && css`
        text-decoration: line-through;
    `}
`;