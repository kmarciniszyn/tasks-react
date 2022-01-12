import styled from "styled-components";

export const Wrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMaxWidth}px) {    
        grid-template-columns: 1fr;
    }
`;

export const Submit = styled.input`
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    transition: filter 0.5s;

    &:hover {
        filter: brightness(140%);
        transform: scale(1.1);
    }

    &:active {
        filter: brightness(150%);
    }
`;