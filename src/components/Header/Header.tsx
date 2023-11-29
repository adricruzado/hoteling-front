import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        src="/images/logo.webp"
        alt="hoteling logo"
        width="400"
        height="200"
      />
    </HeaderStyled>
  );
};

export default Header;
