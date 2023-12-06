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
  });
});
