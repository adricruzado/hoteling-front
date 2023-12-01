import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";

import HotelsPage from "../../pages/HotelsPage/HotelsPage";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/hotels" />} />
        <Route path="/hotels" element={<HotelsPage />} />
      </Routes>
    </>
  );
};

export default App;
