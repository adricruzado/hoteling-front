import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import HotelsPage from "./HotelsPage";
import mainTheme from "../../styles/mainTheme";

describe("Given a HotelsPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Your visited hotels:'", () => {
      const hotelsPageHeadingText = "Your visited hotels:";

      render(
        <ThemeProvider theme={mainTheme}>
          <HotelsPage />
        </ThemeProvider>,
      );

      const hotelsPageHeading = screen.getByRole("heading", {
        name: hotelsPageHeadingText,
      });

      expect(hotelsPageHeading).toBeInTheDocument();
    });
  });
});
