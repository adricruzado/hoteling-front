import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import HotelForm from "../../components/HotelForm/HotelForm";
import useHotelsApi from "../../hooks/useHotelsApi";
import {
  loadSelectedHotelActionCreator,
  modifyHotelActionCreator,
} from "../../store/features/hotels/hotelsSlice";
import {
  HotelStructure,
  HotelWithoutId,
} from "../../store/features/hotels/types";
import ModifyHotelPageStyled from "./ModifyHotelPageStyled";
import { useEffect } from "react";

const ModifyHotelPage = (): React.ReactElement => {
  const { modifyHotel, loadSelectedHotel } = useHotelsApi();
  const { selectedHotel } = useAppSelector((state) => state.hotelsState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { hotelId } = useParams();

  const updateHotel = async (hotel: HotelWithoutId) => {
    const updatedHotel = await modifyHotel(selectedHotel._id, hotel);

    dispatch(modifyHotelActionCreator(updatedHotel!));
    navigate("/hotels");
  };

  useEffect(() => {
    (async () => {
      const hotel = await loadSelectedHotel(hotelId as string);

      dispatch(loadSelectedHotelActionCreator(hotel as HotelStructure));

      return hotel;
    })();
  }, [dispatch, loadSelectedHotel, hotelId]);

  return (
    <ModifyHotelPageStyled>
      <h1 className="page-title">Modify your hotel:</h1>
      <HotelForm
        onSubmit={updateHotel}
        selectedHotel={selectedHotel}
        buttonText="modify"
      />
    </ModifyHotelPageStyled>
  );
};

export default ModifyHotelPage;
