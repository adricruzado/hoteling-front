import HotelCard from "../../components/HotelCard/HotelCard";
import { hotelData } from "../../data/hotel/hotelData";
import HotelsPageStyled from "./HotelsPageStyled";

const HotelsPage = (): React.ReactElement => {
  return (
    <HotelsPageStyled>
      <h1 className="page-title">Your visited hotels:</h1>
      <HotelCard hotel={hotelData} />
    </HotelsPageStyled>
  );
};

export default HotelsPage;
