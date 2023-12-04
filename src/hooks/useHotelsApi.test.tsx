import { renderHook } from "@testing-library/react";
import { apiHotelsMock } from "../mocks/apiHotelsMock";
import useHotelsApi from "./useHotelsApi";
import { providerWrapper } from "../testUtils/providerWrapper";

describe("Given a useHotelsApi hook", () => {
  describe("When it is called", () => {
    test("Then it should return the information of 'Four Seasons Hotel George V' and 'The Ritz-Carlton'", async () => {
      const expectedHotels = apiHotelsMock;

      const {
        result: {
          current: { getHotels },
        },
      } = renderHook(() => useHotelsApi(), { wrapper: providerWrapper });

      const hotels = await getHotels();

      expect(hotels).toStrictEqual(expectedHotels);
    });
  });

  describe("When it calls his deleteHotel method with an hotel id", () => {
    test("Then it should delete the 'Four Seasons Hotel George V' hotel", async () => {
      const expectedHotelId = apiHotelsMock[0]._id;
      const expectedResponse = {};

      const {
        result: {
          current: { deleteHotel },
        },
      } = renderHook(() => useHotelsApi(), { wrapper: providerWrapper });

      const response = await deleteHotel(expectedHotelId);

      expect(response).toStrictEqual(expectedResponse);
    });
  });
});
