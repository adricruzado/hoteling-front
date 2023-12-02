import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import HotelCard from "./HotelCard";
import { apiHotelMock } from "../../mocks/apiHotelMock";

describe("Given an HotelCard component", () => {
  describe("When it receives a 'Four Seasons Hotel George V' hotel", () => {
    test("Then it should show the text 'Four Seasons Hotel George V' in a heading", () => {
      const expectedHotel = apiHotelMock.name;

      customRender(<HotelCard hotel={apiHotelMock} />);

      const hotel = screen.getByRole("heading", {
        name: expectedHotel,
      });

      expect(hotel).toBeInTheDocument();
    });

    test("Then it should show an image with the alternative text 'Four Seasons Hotel George V'", () => {
      const expectedAltText = apiHotelMock.name;

      customRender(<HotelCard hotel={apiHotelMock} />);

      const hotelImage = screen.getByAltText(expectedAltText);

      expect(hotelImage).toBeInTheDocument();
    });

    test("Then it should show the emoji '✅'", () => {
      const expectedEmoji = "✅";

      customRender(<HotelCard hotel={apiHotelMock} />);

      const favouriteEmoji = screen.getByText(expectedEmoji);

      expect(favouriteEmoji).toBeInTheDocument();
    });
  });
});
