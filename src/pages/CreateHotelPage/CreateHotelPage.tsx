import HotelForm from "../../components/HotelForm/HotelForm";
import CreateHotelPageStyled from "./CreateHotelPageStyled";

const CreateHotelPage = (): React.ReactElement => {
  return (
    <CreateHotelPageStyled>
      <h1 className="page-title">Add your hotel:</h1>
      <HotelForm />
    </CreateHotelPageStyled>
  );
};

export default CreateHotelPage;
