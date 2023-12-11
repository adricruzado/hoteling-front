import { apiHotelsMock } from "../../../mocks/apiHotelsMock";
import { mockWithHotelModified } from "../../../mocks/mockWithHotelModified";
import { mockWithNewHotel } from "../../../mocks/mockWithNewHotel";
import {
  addHotelActionCreator,
  deleteHotelActionCreator,
  hotelsReducer,
  loadHotelsActionCreator,
  loadSelectedHotelActionCreator,
  modifyHotelActionCreator,
} from "./hotelsSlice";
import { HotelStateStructure, HotelStructure } from "./types";

describe("Given a hotelsReducer reducer", () => {
  describe("When it receives an empty list of hotels and the action loadHotels", () => {
    test("Then it should return a list with the hotels 'Four Seasons Hotel George V' and 'The Ritz-Carlton'", () => {
      const hotelList = apiHotelsMock;
      const currentHotelListState: HotelStateStructure = {
        hotels: [],
        selectedHotel: {} as HotelStructure,
      };

      const newListState = hotelsReducer(
        currentHotelListState,
        loadHotelsActionCreator(hotelList),
      );

      expect(newListState.hotels).toStrictEqual(hotelList);
    });
  });

  describe("When it receives a list of hotels, a valid hotel id and the action deleteHotel", () => {
    test("Then it should return the list of hotels without the hotel 'Four Seasons Hotel George V'", () => {
      const initialState: HotelStateStructure = {
        hotels: apiHotelsMock,
        selectedHotel: {} as HotelStructure,
      };
      const expectedDeletedHotel = "Four Seasons Hotel George V";
      const expectedHotelId = "656492010f2c29b15944b0d8";

      const currentHotelsState = hotelsReducer(
        initialState,
        deleteHotelActionCreator(expectedHotelId),
      );

      currentHotelsState.hotels.forEach((hotel) =>
        expect(hotel).not.toHaveProperty("name", expectedDeletedHotel),
      );
    });
  });

  describe("When it receives a hotels list, an 'Hesperia Hotel' and the action addHotel", () => {
    test("Then it should return the list of hotels with the 'Hesperia Hotel'", () => {
      const initialState: HotelStateStructure = {
        hotels: apiHotelsMock,
        selectedHotel: {} as HotelStructure,
      };
      const newHotel: HotelStructure = mockWithNewHotel[2];

      const currentHotelsState = hotelsReducer(
        initialState,
        addHotelActionCreator(newHotel),
      );

      expect(currentHotelsState.hotels).toStrictEqual(mockWithNewHotel);
    });
  });

  describe("When it receives a hotels list, an 'Hesperia Hotel' and the action loadSelectedHotel", () => {
    test("Then it should return the list of hotels with the 'Hesperia Hotel' selected", () => {
      const initialState: HotelStateStructure = {
        hotels: mockWithNewHotel,
        selectedHotel: {} as HotelStructure,
      };
      const selectedHotel: HotelStructure = mockWithNewHotel[2];

      const currentHotelState = hotelsReducer(
        initialState,
        loadSelectedHotelActionCreator(selectedHotel),
      );

      expect(currentHotelState.selectedHotel).toStrictEqual(selectedHotel);
    });
  });

  describe("When it receives a hotels list, an 'Hesperia Hotel' and the action modifyHotel", () => {
    test("Then it should return the list of hotels with the 'Hesperia Hotel' modified", () => {
      const modifiedHotel = { ...mockWithNewHotel[2], isFavourite: false };

      const initialState: HotelStateStructure = {
        hotels: mockWithNewHotel,
        selectedHotel: {} as HotelStructure,
      };

      const currentHotelState = hotelsReducer(
        initialState,
        modifyHotelActionCreator(modifiedHotel),
      );

      expect(currentHotelState.hotels).toStrictEqual(mockWithHotelModified);
    });
  });
});
