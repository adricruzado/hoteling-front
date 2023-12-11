import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import ModifyHotelPage from "./ModifyHotelPage";

describe("Given a ModifyHotelPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Modify your hotel:'", () => {
      const modifyHotelPageHeadingText = "Modify your hotel:";

      customRender(<ModifyHotelPage />);

      const modifyHotelPageHeading = screen.getByRole("heading", {
        name: modifyHotelPageHeadingText,
      });

      expect(modifyHotelPageHeading).toBeInTheDocument();
    });

    test("Then it should show a form with a 'City:' label text", () => {
      const expectedLabelText = "City:";

      customRender(<ModifyHotelPage />);

      const labelText = screen.getByLabelText(expectedLabelText);

      expect(labelText).toBeInTheDocument();
    });
  });
});
