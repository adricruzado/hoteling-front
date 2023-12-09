import styled from "styled-components";

const HotelDetailsPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .hotel-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: ${({ theme }) => theme.typography.mainFont};
    color: #000;
    border-radius: 30px;
    width: 290px;
    height: 100%;
    padding: 20px;
    margin-bottom: 30px;

    &__name {
      font-size: 30px;
      font-weight: 600;
      margin-top: 20px;
      color: ${({ theme }) => theme.colors.accent};
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

    &__details--description {
      display: flex;
      flex-direction: column;
      font-size: 19px;
      gap: 15px;
      margin-bottom: 8px;
    }

    &__image {
      object-fit: cover;
      border-radius: 25px;
    }
  }
`;

export default HotelDetailsPageStyled;
