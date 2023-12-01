import { renderHook } from "@testing-library/react";
import { apiHotelsMock } from "../mocks/apiHotelsMock";
import useHotelsApi from "./useHotelsApi";

describe("Given a useHotelsApi hook", () => {
  describe("When it is called", () => {
    test("Then it should return the information of 'Four Seasons Hotel George V' and 'The Ritz-Carlton'", async () => {
      const expectedHotels = apiHotelsMock;

      const {
        result: {
          current: { getHotels },
        },
      } = renderHook(() => useHotelsApi());

      const hotels = await getHotels();

      expect(hotels).toStrictEqual(expectedHotels);
    });
  });
});
