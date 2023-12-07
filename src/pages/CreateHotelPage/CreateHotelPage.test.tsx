import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import CreateHotelPage from "./CreateHotelPage";

describe("Given a CreateHotelPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Add your hotel:'", () => {
      const createHotelPageHeadingText = "Add your hotel:";

      customRender(<CreateHotelPage />);

      const createHotelPageHeading = screen.getByRole("heading", {
        name: createHotelPageHeadingText,
      });

      expect(createHotelPageHeading).toBeInTheDocument();
    });

    test("Then it should show a form with a 'Country:' label text", () => {
      const expectedLabelText = "Country:";

      customRender(<CreateHotelPage />);

      const labelText = screen.getByLabelText(expectedLabelText);

      expect(labelText).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'add hotel'", () => {
      const expectedButtonText = "add hotel";

      customRender(<CreateHotelPage />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
