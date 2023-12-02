import { configureStore } from "@reduxjs/toolkit";
import { hotelsReducer } from "../store/features/hotels/hotelsSlice";
import { uiReducer } from "../store/features/ui/uiSlice";
import { apiHotelsMock } from "../mocks/apiHotelsMock";
import { Provider } from "react-redux";
import { PropsWithChildren } from "react";

export const getMockStore = () => {
  const mockStore = configureStore({
    reducer: { hotelsState: hotelsReducer, uiState: uiReducer },
    preloadedState: {
      hotelsState: { hotels: apiHotelsMock },
      uiState: { isLoading: false },
    },
  });

  return mockStore;
};

export const providerWrapper = ({ children }: PropsWithChildren) => {
  const mockStore = getMockStore();

  return <Provider store={mockStore}>{children}</Provider>;
};
