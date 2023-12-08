import HotelForm from "../../components/HotelForm/HotelForm";
import useHotelsApi from "../../hooks/useHotelsApi";
import CreateHotelPageStyled from "./CreateHotelPageStyled";

const CreateHotelPage = (): React.ReactElement => {
  const { addHotel } = useHotelsApi();

  return (
    <CreateHotelPageStyled>
      <h1 className="page-title">Add your hotel:</h1>
      <HotelForm onSubmit={addHotel} />
    </CreateHotelPageStyled>
  );
};

export default CreateHotelPage;
