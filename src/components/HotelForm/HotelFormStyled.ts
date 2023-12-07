import styled from "styled-components";

const HotelFormStyled = styled.form`
  left: auto;
  background-color: ${({ theme }) => theme.colors.accent};
  padding: 15px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  color: #fff;
  box-shadow: 0 0 15px ${({ theme }) => theme.colors.accent};
  width: 290px;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 500;

  .form {
    &__input {
      padding: 10px;
      display: inline-block;
      width: 100%;
      border-radius: 5px;
    }

    &__label {
      display: inline-block;
      margin-bottom: 5px;
    }

    &__row {
      display: block;
      margin: 20px;
      flex-direction: row;
      position: relative;
      align-items: center;
    }

    &__row--checkbox {
      display: flex;
      align-items: end;
    }

    &__input--checkbox {
      width: 20px;
      height: 20px;
      accent-color: ${({ theme }) => theme.colors.light};
    }

    &__label--checkbox {
      margin: 0 5px 0 20px;
    }
  }
`;

export default HotelFormStyled;
