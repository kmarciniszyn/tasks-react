import styled from "styled-components";

export const Wrapper = styled.footer`
    margin: 0 auto;
    max-width: 1000px;
    padding: 20px;
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.mediumGray};
    text-align: center;
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGray};
    transition: filter 0.5s;

    &:hover {
        filter: brightness(140%);
    }
`;