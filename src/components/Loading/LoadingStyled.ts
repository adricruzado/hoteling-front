import styled from "styled-components";

const LoadingStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000c;
  width: 100%;
  height: 100%;
  position: fixed;

  .loading-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .loading-text {
    color: #fff;
    font-size: 30px;
    font-weight: bold;
  }
`;

export default LoadingStyled;
