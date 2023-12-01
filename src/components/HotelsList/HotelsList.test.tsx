import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import HotelsList from "./HotelsList";

describe("Given an HotelList component", () => {
  describe("When it receives a list with 'Four Seasons Hotel George V' and 'The Ritz-Carlton'", () => {
    test("Then it should show a list with the texts 'Four Seasons Hotel George V' and 'The Ritz-Carlton' in headings", () => {
      const expectedNumberOfHotels = 2;

      customRender(<HotelsList />);

      const hotelList = screen.getAllByRole("heading").length;

      expect(hotelList).toBe(expectedNumberOfHotels);
    });
  });
});
