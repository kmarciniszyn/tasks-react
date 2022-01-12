import styled from "styled-components";

const Field = styled.input`
    padding: 10px;
    border: 2px solid ${({ theme }) => theme.colors.gray};
`;

export default Field;