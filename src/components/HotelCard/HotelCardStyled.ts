import styled from "styled-components";

const HotelCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.typography.mainFont};
  color: #fff;
  border-radius: 30px;
  width: 290px;
  height: 100%;
  box-shadow: 0 0 15px ${({ theme }) => theme.colors.accent};
  padding: 20px;
  margin-bottom: 30px;

  .hotel-card {
    &__name {
      font-size: 30px;
      font-weight: 600;
      margin-top: 20px;
    }

    &__detail {
      font-size: 22px;
      font-weight: bold;
    }

    &__details {
      display: flex;
      align-items: center;
      font-size: 19px;
      gap: 10px;
      margin-bottom: 8px;
    }

    &__image {
      object-fit: cover;
      border: 4px solid ${({ theme }) => theme.colors.main};
      border-radius: 25px;
    }
  }
`;

export default HotelCardStyled;
