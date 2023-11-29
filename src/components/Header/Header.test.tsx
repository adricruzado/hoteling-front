import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Header from "./Header";
import mainTheme from "../../styles/mainTheme";
import { BrowserRouter } from "react-router-dom";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an hoteling logo", () => {
      const expectedText = "hoteling logo";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Header />
          </ThemeProvider>
          ,
        </BrowserRouter>,
      );

      const headerImage = screen.getByRole("img", {
        name: expectedText,
      });

      expect(headerImage).toBeInTheDocument();
    });
  });
});
