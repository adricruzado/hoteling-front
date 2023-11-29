import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import AppStyled from "./AppStyled";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/hotels/" />} />
          <Route path="/hotels" />
        </Routes>
      </main>
    </AppStyled>
  );
};

export default App;
