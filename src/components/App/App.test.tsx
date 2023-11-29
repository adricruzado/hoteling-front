import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import App from "./App";
import mainTheme from "../../styles/mainTheme";

describe("Given an App component", () => {
  describe("When its rendered", () => {
    test("Then it should show an hoteling logo in a header", () => {
      const expectedImageText = "hoteling logo";

      render(
        <ThemeProvider theme={mainTheme}>
          <App />
        </ThemeProvider>,
      );

      const logo = screen.getByRole("img", {
        name: expectedImageText,
      });

      expect(logo).toBeInTheDocument();
    });
  });
});
