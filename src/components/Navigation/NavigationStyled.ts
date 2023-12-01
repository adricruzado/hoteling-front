import styled from "styled-components";

const NavigationStyled = styled.nav`
  .navigation {
    display: flex;
    justify-content: center;
    gap: 40px;
    font-family: ${({ theme }) => theme.typography.secondaryFont};
    font-size: 25px;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 20px;
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.light};
    margin-bottom: 15px;
    padding: 20px;
    border-radius: 40px;
    width: 290px;
  }

  .active {
    text-decoration: underline;
  }
`;

export default NavigationStyled;
