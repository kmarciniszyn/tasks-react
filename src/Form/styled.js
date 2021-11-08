import styled from "styled-components";

export const Wrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 10px;

    @media(max-width: 767px) {    
        grid-template-columns: 1fr;
    }
`;

export const Field = styled.input`
    padding: 10px;
    border: 2px solid #ddd;
`;

export const Submit = styled.input`
    padding: 10px;
    background-color: teal;
    color: white;
    border: none;
    transition: 0.5s;

    &:hover {
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.1);
    }

    &:active {
        background-color: hsl(180, 100%, 35%);
    }
`;