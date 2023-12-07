import { screen, waitFor } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import HotelForm from "./HotelForm";
import userEvent from "@testing-library/user-event";

describe("Given a HotelForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a form with a 'Hotel name:' label text", () => {
      const expectedLabelText = "Hotel name:";

      customRender(<HotelForm />);

      const labelText = screen.getByLabelText(expectedLabelText);

      expect(labelText).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'add hotel'", () => {
      const expectedButtonText = "add hotel";

      customRender(<HotelForm />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user types in all the text input fields", () => {
    test("Then it should show the writen text in the fields", async () => {
      const expectedInputText = "Hesperia Hotel";

      customRender(<HotelForm />);

      const labelText = screen.getByLabelText("Hotel name:");

      await userEvent.type(labelText, expectedInputText);

      const inputText = screen.getByDisplayValue(expectedInputText);

      await waitFor(() => expect(inputText));
    });
  });

  describe("When it is rendered and the user checks the favourite checkbox", () => {
    test("Then it should show the checkbox as checked", async () => {
      const favouriteInputText = "Favourite:";

      customRender(<HotelForm />);

      const checkboxInput = screen.getByRole("checkbox", {
        name: favouriteInputText,
      });

      await userEvent.click(checkboxInput);

      expect(checkboxInput).toBeChecked();
    });
  });
});
