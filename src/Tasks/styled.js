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
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightGray};
    grid-gap: 20px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.colors.white};
    border: none;
    width: 30px;
    height: 30px;
    transition: filter 0.5s;

    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.colors.red};
    `}

    ${({ toggleDone }) => toggleDone && css`
        background-color: ${({ theme }) => theme.colors.green};
    `}

    &:hover {
        filter: brightness(120%);
    }
`;

export const Content = styled.span`
    ${({ isDone }) => isDone && css`
        text-decoration: line-through;
    `}
`;