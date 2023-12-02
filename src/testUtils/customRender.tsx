import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import GlobalStyle from "../styles/GlobalStyle";
import { getMockStore } from "./providerWrapper";

export const customRender = (children: React.ReactElement) => {
  const mockStore = getMockStore();

  render(
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <Provider store={mockStore}>{children}</Provider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>,
  );
};

export const customRenderWithoutBrowserRouter = (
  children: React.ReactElement,
) => {
  const mockStore = getMockStore();

  render(
    <ThemeProvider theme={mainTheme}>
      <Provider store={mockStore}>{children}</Provider>
      <GlobalStyle />
    </ThemeProvider>,
  );
};
