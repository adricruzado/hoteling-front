import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .header-container {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.accent};
  }

  .header__logo {
    width: 400px;
  }
`;

export default HeaderStyled;
