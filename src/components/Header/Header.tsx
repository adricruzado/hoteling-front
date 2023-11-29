import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        className="header__logo"
        src="/images/logo.webp"
        alt="hoteling logo"
        width="400"
        height="200"
      />
    </HeaderStyled>
  );
};

export default Header;
