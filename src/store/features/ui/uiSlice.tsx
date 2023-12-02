import { createSlice } from "@reduxjs/toolkit";
import { UiStructure } from "./types";

export const initialUiState: UiStructure = {
  isLoading: false,
  isError: false,
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
    showError: (currentState) => ({
      ...currentState,
      isError: true,
    }),
    hideError: (currentState) => ({
      ...currentState,
      isError: false,
    }),
  },
});

export const uiReducer = uiSlice.reducer;
export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  showError: showErrorActionCreator,
  hideError: hideErrorActionCreator,
} = uiSlice.actions;
