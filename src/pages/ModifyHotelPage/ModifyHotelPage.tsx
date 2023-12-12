import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import HotelForm from "../../components/HotelForm/HotelForm";
import useHotelsApi from "../../hooks/useHotelsApi";
import { modifyHotelActionCreator } from "../../store/features/hotels/hotelsSlice";
import { HotelWithoutId } from "../../store/features/hotels/types";
import ModifyHotelPageStyled from "./ModifyHotelPageStyled";

const ModifyHotelPage = (): React.ReactElement => {
  const { modifyHotel } = useHotelsApi();
  const { selectedHotel } = useAppSelector((state) => state.hotelsState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const updateHotel = async (hotel: HotelWithoutId) => {
    const updatedHotel = await modifyHotel(selectedHotel._id, hotel);

    dispatch(modifyHotelActionCreator(updatedHotel!));
    navigate("/hotels");
  };

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
