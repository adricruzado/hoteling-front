import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled>
      <div className="loading-container">
        <img src="images/loading.webp" alt="loading" width="228" height="240" />
        <span className="loading-text">Loading...</span>
      </div>
    </LoadingStyled>
  );
};

export default Loading;
