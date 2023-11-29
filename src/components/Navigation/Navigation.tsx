import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <ul className="navigation">
        <li>
          <NavLink to="/hotels/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/new">Add hotel</NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
