import { apiHotelsMock } from "../../../mocks/apiHotelsMock";
import { hotelsReducer, loadHotelsActionCreator } from "./hotelsSlice";
import { HotelStateStructure } from "./types";

describe("Given a hotelsReducer reducer", () => {
  describe("When it receives an empty list of hotels and the action loadHotels", () => {
    test("Then it should return a list with the hotels 'Four Seasons Hotel George V' and 'The Ritz-Carlton'", () => {
      const hotelList = apiHotelsMock;
      const currentHotelListState: HotelStateStructure = {
        hotels: [],
      };

      const newListState = hotelsReducer(
        currentHotelListState,
        loadHotelsActionCreator(hotelList),
      );

      expect(newListState.hotels).toStrictEqual(hotelList);
    });
  });
});
