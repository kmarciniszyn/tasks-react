import styled from "styled-components";

const Button = styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: none;
    transition: filter 0.5s;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMaxWidth}px){
        flex-basis: 100%;
    }

    &:hover {
        filter: brightness(140%);
    }

    &:active {
        filter: brightness(150%);
    }

    &:disabled {
        color: ${({ theme }) => theme.colors.gray};
    }
`;

export default Button;