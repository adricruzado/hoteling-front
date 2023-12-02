import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import HotelsPage from "../../pages/HotelsPage/HotelsPage";
import { useAppSelector } from "../../store/hooks";
import Loading from "../Loading/Loading";

const App = (): React.ReactElement => {
  const uiState = useAppSelector((state) => state.uiState);

  return (
    <>
      {uiState.isLoading && <Loading />}
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/hotels" />} />
        <Route path="/hotels" element={<HotelsPage />} />
      </Routes>
    </>
  );
};

export default App;
