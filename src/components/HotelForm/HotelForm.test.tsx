import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import HotelForm from "./HotelForm";

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
});
