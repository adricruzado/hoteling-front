import styled from "styled-components";

const NotFoundPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 25px;
  height: 350px;

  .not-found {
    &__number {
      color: ${({ theme }) => theme.colors.accent};
      font-size: 50px;
      font-weight: bold;
    }

    &__title {
      color: ${({ theme }) => theme.colors.accent};
      font-size: 20px;
      text-transform: uppercase;
      font-weight: bold;
    }
  }
`;

export default NotFoundPageStyled;
