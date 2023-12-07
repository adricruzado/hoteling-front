import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import HotelsList from "./HotelsList";

describe("Given an HotelList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with the alternative text 'Four Seasons Hotel George V'", () => {
      const expectedAltText = "Four Seasons Hotel George V";

      customRender(<HotelsList />);

      const hotelImage = screen.getByAltText(expectedAltText);

      expect(hotelImage).toBeInTheDocument();
    });

    test("Then it should show an image with the alternative text 'The Ritz-Carlton'", () => {
      const expectedAltText = "The Ritz-Carlton";

      customRender(<HotelsList />);

      const hotelImage = screen.getByAltText(expectedAltText);

      expect(hotelImage).toBeInTheDocument();
    });
  });
});
