import { fireEvent, screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import HotelForm from "./HotelForm";
import userEvent from "@testing-library/user-event";

describe("Given a HotelForm component", () => {
  const onSubmit = vi.fn();

  describe("When it is rendered", () => {
    test("Then it should show a form with a 'Hotel name:' label text", () => {
      const expectedLabelText = "Hotel name:";

      customRender(<HotelForm onSubmit={onSubmit} />);

      const labelText = screen.getByLabelText(expectedLabelText);

      expect(labelText).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'add hotel'", () => {
      const expectedButtonText = "add hotel";

      customRender(<HotelForm onSubmit={onSubmit} />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user types 'Hesperia Hotel' in the first input", () => {
    test("Then it should show the writen text in the first input", async () => {
      const expectedInputText = "Hesperia Hotel";

      customRender(<HotelForm onSubmit={onSubmit} />);

      const labelText = screen.getByLabelText("Hotel name:");

      await userEvent.type(labelText, expectedInputText);

      const inputText = screen.getByDisplayValue(expectedInputText);

      expect(inputText).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user checks the favourite checkbox", () => {
    test("Then it should show the checkbox as checked", async () => {
      const favouriteInputText = "Favourite:";

      customRender(<HotelForm onSubmit={onSubmit} />);

      const checkboxInput = screen.getByRole("checkbox", {
        name: favouriteInputText,
      });

      await userEvent.click(checkboxInput);

      expect(checkboxInput).toBeChecked();
    });
  });

  describe("When it is rendered and the user clicks on the button to add a new hotel", () => {
    test("Then it should call its onSubmit function", async () => {
      customRender(<HotelForm onSubmit={onSubmit} />);

      const hotelForm = screen.getByLabelText("Hotel name:");
      const addHotelButton = screen.getByRole("button", { name: "add hotel" });

      await userEvent.click(addHotelButton);

      fireEvent.submit(hotelForm);

      expect(onSubmit).toHaveBeenCalled();
    });
  });

  describe("When it is rendered and the user fills all the inputs and clicks the 'add hotel' button", () => {
    test("Then it should call its onSubmit function", async () => {
      const expectedInputText = "Prueba";
      const expectedButtonText = "add hotel";

      customRender(<HotelForm onSubmit={onSubmit} />);

      const inputHotelElement = screen.getByLabelText("Hotel name:");
      await userEvent.type(inputHotelElement, expectedInputText);

      const inputCountryElement = screen.getByLabelText("Country:");
      await userEvent.type(inputCountryElement, expectedInputText);

      const inputCityElement = screen.getByLabelText("City:");
      await userEvent.type(inputCityElement, expectedInputText);

      const inputRatingElement = screen.getByLabelText(
        "Rating (from 0 to 10):",
      );
      await userEvent.type(inputRatingElement, expectedInputText);

      const inputPriceElement = screen.getByLabelText("Price (€):");
      await userEvent.type(inputPriceElement, expectedInputText);

      const inputDescriptionElement = screen.getByLabelText("Description:");
      await userEvent.type(inputDescriptionElement, expectedInputText);

      const inputFavouriteElement = screen.getByLabelText("Favourite:");
      await userEvent.type(inputFavouriteElement, expectedInputText);

      const inputPictureElement = screen.getByLabelText("Picture URL:");
      await userEvent.type(inputPictureElement, expectedInputText);

      const formButtonElement = screen.getByRole("button", {
        name: expectedButtonText,
      });

      await userEvent.click(formButtonElement);

      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
