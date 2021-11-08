import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    background-color: transparent;
    color: teal;
    border: none;
    padding: 10px;
    transition: color 0.5s;

    @media(max-width: 767px){
        flex-basis: 100%;
    }

    &:hover {
        color: hsl(180, 100%, 40%);
    }

    &:active {
        color: hsl(180, 100%, 50%);
    }

    &:disabled {
        color: #ddd;
    }
`;