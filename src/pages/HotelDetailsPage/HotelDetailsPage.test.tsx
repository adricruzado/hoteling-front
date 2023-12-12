import { screen } from "@testing-library/react";
import HotelDetailsPage from "./HotelDetailsPage";
import { customRender } from "../../testUtils/customRender";

describe("Given an HotelDetailsPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show an hotel with the text 'Favourite:'", () => {
      const expectedText = "Favourite:";

      customRender(<HotelDetailsPage />);

      const favouriteText = screen.getByText(expectedText);

      expect(favouriteText).toBeInTheDocument();
    });
  });
});
