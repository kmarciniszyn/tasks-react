import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: white;
    box-shadow: 0px 0px 2px 0px #ddd;
    margin: 10px 0;
`;

export const Header = styled.header`
    border-bottom: 2px solid #ddd;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;

    @media (max-width: 767px){
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    margin: 0;
`;

export const Body = styled.div`
    padding: 10px;
`;