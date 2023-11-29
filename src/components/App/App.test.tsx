import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import App from "./App";
import mainTheme from "../../styles/mainTheme";
import { BrowserRouter } from "react-router-dom";

describe("Given an App component", () => {
  describe("When its rendered", () => {
    test("Then it should show an hoteling logo in a header", () => {
      const expectedImageText = "hoteling logo";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const logo = screen.getByRole("img", {
        name: expectedImageText,
      });

      expect(logo).toBeInTheDocument();
    });
  });
});
