import HotelForm from "../../components/HotelForm/HotelForm";
import useHotelsApi from "../../hooks/useHotelsApi";
import ModifyHotelPageStyled from "./ModifyHotelPageStyled";

const ModifyHotelPage = (): React.ReactElement => {
  const { addHotel } = useHotelsApi();

  return (
    <ModifyHotelPageStyled>
      <h1 className="page-title">Modify your hotel:</h1>
      <HotelForm onSubmit={addHotel} />
    </ModifyHotelPageStyled>
  );
};

export default ModifyHotelPage;
