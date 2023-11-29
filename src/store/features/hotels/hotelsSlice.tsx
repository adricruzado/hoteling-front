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
  },
});

export const hotelsReducer = hotelsSlice.reducer;
export const { loadHotels: loadHotelsActionCreator } = hotelsSlice.actions;
