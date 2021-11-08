import styled from "styled-components";

export const Wrapper = styled.footer`
    margin: 0 auto;
    max-width: 1000px;
    padding: 20px;
`;

export const Paragraph = styled.p`
    color: hsl(0, 0%, 40%);
    text-align: center;
`;

export const Link = styled.a`
    text-decoration: none;
    color: hsl(0, 0%, 20%);

    &:hover {
        color: hsl(0, 0%, 60%);
    }
`;