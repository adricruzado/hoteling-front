import { useAppSelector } from "../../store/hooks";
import HotelCard from "../HotelCard/HotelCard";
import HotelListStyled from "./HotelListStyled";

const HotelList = (): React.ReactElement => {
  const hotels = useAppSelector((state) => state.hotelsState.hotels);

  return (
    <HotelListStyled>
      {hotels.map((hotel) => (
        <li key={hotel._id}>
          <HotelCard hotel={hotel} />
        </li>
      ))}
    </HotelListStyled>
  );
};

export default HotelList;
