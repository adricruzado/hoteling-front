import { configureStore } from "@reduxjs/toolkit";
import { hotelsReducer } from "../store/features/hotels/hotelsSlice";
import { apiHotelsMock } from "../mocks/apiHotelsMock";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import GlobalStyle from "../styles/GlobalStyle";

const customRender = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: { hotelsState: hotelsReducer },
    preloadedState: { hotelsState: { hotels: apiHotelsMock } },
  });

  render(
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <Provider store={mockStore}>{children}</Provider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>,
  );
};

export default customRender;
