import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import HotelsPage from "../../pages/HotelsPage/HotelsPage";
import { useAppSelector } from "../../store/hooks";
import Loading from "../Loading/Loading";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateHotelPage from "../../pages/CreateHotelPage/CreateHotelPage";
import HotelDetailsPage from "../../pages/HotelDetailsPage/HotelDetailsPage";
import ModifyHotelPage from "../../pages/ModifyHotelPage/ModifyHotelPage";

const App = (): React.ReactElement => {
  const uiState = useAppSelector((state) => state.uiState);

  return (
    <>
      {uiState.isLoading && <Loading />}
      <Header />
      <ToastContainer />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/hotels" />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/create" element={<CreateHotelPage />} />
          <Route path="/hotels/:hotelId" element={<HotelDetailsPage />} />
          <Route path="/hotels/:hotelId/modify" element={<ModifyHotelPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
