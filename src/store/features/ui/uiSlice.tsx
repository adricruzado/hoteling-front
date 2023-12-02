import { createSlice } from "@reduxjs/toolkit";
import { UiStructure } from "./types";

export const initialUiState: UiStructure = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentState) => ({
      ...currentState,
      isLoading: true,
    }),
    hideLoading: (currentState) => ({
      ...currentState,
      isLoading: false,
    }),
  },
});

export const uiReducer = uiSlice.reducer;
export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
} = uiSlice.actions;
