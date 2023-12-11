import styled from "styled-components";

const ModifyHotelPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .page-title {
    font-size: 1.8rem;
    text-align: center;
    margin-top: 22px;
    margin-bottom: 30px;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export default ModifyHotelPageStyled;
