import { useAppSelector } from "../../store/hooks";
import HotelCard from "../HotelCard/HotelCard";
import HotelListStyled from "./HotelListStyled";

const HotelList = (): React.ReactElement => {
  const hotelsState = useAppSelector((state) => state.hotelsState);

  return (
    <HotelListStyled>
      {hotelsState.hotels.map((hotel) => (
        <li key={hotel._id}>
          <HotelCard hotel={hotel} />
        </li>
      ))}
    </HotelListStyled>
  );
};

export default HotelList;
