import { useAppSelector } from "../../store/hooks";
import HotelCard from "../HotelCard/HotelCard";
import HotelsListStyled from "./HotelsListStyled";

const HotelsList = (): React.ReactElement => {
  const hotels = useAppSelector((state) => state.hotelsState.hotels);

  return (
    <HotelsListStyled>
      {hotels.map((hotel) => (
        <li key={hotel._id}>
          <HotelCard hotel={hotel} />
        </li>
      ))}
    </HotelsListStyled>
  );
};

export default HotelsList;
