import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navigation from "./Navigation";
import mainTheme from "../../styles/mainTheme";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Home' link", () => {
      const expectedHomeText = "Home";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Navigation />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const navigationHomeLink = screen.getByRole("link", {
        name: expectedHomeText,
      });

      expect(navigationHomeLink).toBeInTheDocument();
    });

    test("Then it should show an 'Add hotel' link", () => {
      const expectedAddHotelText = "Add hotel";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Navigation />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const navigationAddHotelLink = screen.getByRole("link", {
        name: expectedAddHotelText,
      });

      expect(navigationAddHotelLink).toBeInTheDocument();
    });
  });
});
