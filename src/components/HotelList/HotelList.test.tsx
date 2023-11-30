import { screen } from "@testing-library/react";
import { apiHotelsMock } from "../../mocks/apiHotelsMock";
import customRender from "../../testUtils/customRender";
import HotelList from "./HotelList";

describe("Given an HotelList component", () => {
  describe("When it receives a list with 2 hotels", () => {
    test("Then it should show a list with 2 hotels", () => {
      const expectedNumberOfHotels = apiHotelsMock.length;

      customRender(<HotelList />);

      const hotelList = screen.getAllByRole("article").length;

      expect(hotelList).toBe(expectedNumberOfHotels);
    });
  });
});
