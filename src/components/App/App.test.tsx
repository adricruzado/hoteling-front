import { screen } from "@testing-library/react";
import App from "./App";
import {
  customRender,
  customRenderWithoutBrowserRouter as customRenderWithoutBrowserRouter,
} from "../../testUtils/customRender";
import { MemoryRouter } from "react-router-dom";

describe("Given an App component", () => {
  describe("When its rendered", () => {
    test("Then it should show an hoteling logo in a header", () => {
      const expectedImageText = "hoteling logo";

      customRender(<App />);

      const logo = screen.getByRole("img", {
        name: expectedImageText,
      });

      expect(logo).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a HotelsPage path", () => {
    test("Then it should show the text 'Your visited hotels:' in a heading", () => {
      const expectedHeadingText = "Your visited hotels:";

      customRenderWithoutBrowserRouter(
        <MemoryRouter initialEntries={["/hotels"]}>
          <App />
        </MemoryRouter>,
      );

      const heading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show an image with the alternative text 'Four Seasons Hotel George V'", () => {
      const expectedAltText = "Four Seasons Hotel George V";

      customRenderWithoutBrowserRouter(
        <MemoryRouter initialEntries={["/hotels"]}>
          <App />
        </MemoryRouter>,
      );

      const image = screen.getByAltText(expectedAltText);

      expect(image).toBeInTheDocument();
    });

    test("Then it should show the text 'Four Seasons Hotel George V' in a heading", () => {
      const expectedHeadingtext = "Four Seasons Hotel George V";

      customRenderWithoutBrowserRouter(
        <MemoryRouter initialEntries={["/hotels"]}>
          <App />
        </MemoryRouter>,
      );

      const heading = screen.getByRole("heading", {
        name: expectedHeadingtext,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
