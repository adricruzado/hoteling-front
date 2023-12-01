import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import HotelCard from "./HotelCard";
import { apiHotelMock } from "../../mocks/apiHotelMock";

describe("Given an HotelCard component", () => {
  describe("When it receives a 'Four Seasons Hotel George V' picture url", () => {
    test("Then it should show a 'Four Seasons Hotel George V' picture", () => {
      const expectedAltText = apiHotelMock.name;

      customRender(<HotelCard hotel={apiHotelMock} />);

      const pictureAltText = screen.getByRole("img", {
        name: expectedAltText,
      });

      expect(pictureAltText).toBeInTheDocument();
    });
  });

  describe("When it receives 'Four Seasons Hotel George V' data", () => {
    test("Then it should show the text 'Four Seasons Hotel George V' in a heading", () => {
      const fourSeasonsHotelData = apiHotelMock.name;

      customRender(<HotelCard hotel={apiHotelMock} />);

      const fourSeasonsName = screen.getByRole("heading", {
        name: fourSeasonsHotelData,
      });

      expect(fourSeasonsName).toBeInTheDocument();
    });

    test("Then it should show the emoji '✅'", () => {
      const expectedEmoji = "✅";

      customRender(<HotelCard hotel={apiHotelMock} />);

      const favouriteEmoji = screen.getByText(expectedEmoji);

      expect(favouriteEmoji).toBeInTheDocument();
    });
  });
});
