import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <div className="header-container">
        <img
          className="header-container__logo"
          src="/images/logo.webp"
          alt="hoteling logo"
          width="400"
          height="200"
        />
      </div>
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
