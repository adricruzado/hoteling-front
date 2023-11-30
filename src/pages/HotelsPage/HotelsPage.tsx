import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import HotelsPageStyled from "./HotelsPageStyled";
import { loadHotelsActionCreator } from "../../store/features/hotels/hotelsSlice";
import { hotelsData } from "../../data/hotel/hotelsData";
import HotelList from "../../components/HotelList/HotelList";

const HotelsPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadHotelsActionCreator(hotelsData));
  }, [dispatch]);

  return (
    <HotelsPageStyled>
      <h1 className="page-title">Your visited hotels:</h1>
      <HotelList />
    </HotelsPageStyled>
  );
};

export default HotelsPage;
