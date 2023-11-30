import { screen } from "@testing-library/react";
import { hotelData } from "../../data/hotel/hotelData";
import customRender from "../../testUtils/customRender";
import HotelCard from "./HotelCard";

describe("Given an HotelCard component", () => {
  describe("When it receives a 'Four Seasons Hotel George V' picture url", () => {
    test("Then it should show a 'Four Seasons Hotel George V' picture", () => {
      const expectedAltText = hotelData.name;

      customRender(<HotelCard hotel={hotelData} />);

      const pictureAltText = screen.getByRole("img", {
        name: expectedAltText,
      });

      expect(pictureAltText).toBeInTheDocument();
    });
  });

  describe("When it receives 'Four Seasons Hotel George V' data", () => {
    test("Then it should show the text 'Four Seasons Hotel George V' in a heading", () => {
      const fourSeasonsHotelData = hotelData;

      customRender(<HotelCard hotel={hotelData} />);

      const fourSeasonsName = screen.getByRole("heading", {
        name: fourSeasonsHotelData.name,
      });

      expect(fourSeasonsName).toBeInTheDocument();
    });
  });
});
