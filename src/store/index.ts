import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { hotelsReducer } from "./features/hotels/hotelsSlice";

export const store = configureStore({
  reducer: {
    hotelsState: hotelsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
