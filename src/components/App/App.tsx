import Header from "../Header/Header";
import AppStyled from "./AppStyled";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Header />
      <main />
    </AppStyled>
  );
};

export default App;
