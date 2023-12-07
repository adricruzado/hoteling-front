import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HotelStateStructure, HotelStructure } from "./types";

export const initialHotelsState: HotelStateStructure = {
  hotels: [],
};

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: initialHotelsState,
  reducers: {
    loadHotels: (currentState, action: PayloadAction<HotelStructure[]>) => ({
      ...currentState,
      hotels: action.payload,
    }),
    deleteHotel: (currentState, action: PayloadAction<string>) => ({
      ...currentState,
      hotels: currentState.hotels.filter(
        (hotel) => hotel._id !== action.payload,
      ),
    }),
    addHotel: (currentState, action: PayloadAction<HotelStructure>) => ({
      ...currentState,
      hotels: [...currentState.hotels, action.payload],
    }),
  },
});

export const hotelsReducer = hotelsSlice.reducer;
export const {
  loadHotels: loadHotelsActionCreator,
  deleteHotel: deleteHotelActionCreator,
  addHotel: addHotelActionCreator,
} = hotelsSlice.actions;
