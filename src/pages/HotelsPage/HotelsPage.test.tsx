import { screen } from "@testing-library/react";
import HotelsPage from "./HotelsPage";
import { customRender } from "../../testUtils/customRender";

describe("Given a HotelsPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Your visited hotels:'", () => {
      const hotelsPageHeadingText = "Your visited hotels:";

      customRender(<HotelsPage />);

      const hotelsPageHeading = screen.getByRole("heading", {
        name: hotelsPageHeadingText,
      });

      expect(hotelsPageHeading).toBeInTheDocument();
    });

    test("Then it should show the text 'Four Seasons Hotel George V' in a heading", () => {
      const expectedHotel = "Four Seasons Hotel George V";

      customRender(<HotelsPage />);

      const hotel = screen.getByRole("heading", {
        name: expectedHotel,
      });

      expect(hotel).toBeInTheDocument();
    });

    test("Then it should show an image with the alternative text 'Four Seasons Hotel George V'", () => {
      const expectedAltText = "Four Seasons Hotel George V";

      customRender(<HotelsPage />);

      const hotelImage = screen.getByAltText(expectedAltText);

      expect(hotelImage).toBeInTheDocument();
    });
  });
});
