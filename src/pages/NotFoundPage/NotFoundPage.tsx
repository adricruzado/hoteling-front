import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled>
      <span className="not-found__number">404</span>
      <span className="not-found__title">Not found...</span>
      <span className="not-found__subtitle">Please go back to homepage.</span>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
