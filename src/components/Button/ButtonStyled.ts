import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.accentLight};
  color: #fff;
  text-transform: uppercase;
  border-radius: 15px;
  padding: 10px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export default ButtonStyled;
