import { fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import {
  customRender,
  customRenderWithoutBrowserRouter as customRenderWithoutBrowserRouter,
} from "../../testUtils/customRender";
import userEvent from "@testing-library/user-event";

describe("Given an App component", () => {
  describe("When its rendered", () => {
    test("Then it should show an hoteling logo in a header with an alternative text 'hoteling logo'", () => {
      const expectedAltText = "hoteling logo";

      customRender(<App />);

      const logo = screen.getByAltText(expectedAltText);

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

  describe("When it is rendered with an invalid path", () => {
    test("Then it should show the text 'Not found...'", () => {
      const expectedText = "Not found...";

      customRenderWithoutBrowserRouter(
        <MemoryRouter initialEntries={["/wrong/path"]}>
          <App />
        </MemoryRouter>,
      );

      const notFoundPage = screen.getByText(expectedText);

      expect(notFoundPage).toBeInTheDocument();
    });
  });

  describe("When it is rendered on the modifyHotelPage and the user changes the country of the 'Hesperia Hotel' and clicks on the button to modify", () => {
    test("Then it should modify the 'Hesperia Hotel' and go to HotelsPage", async () => {
      const buttonText = "modify";

      customRenderWithoutBrowserRouter(
        <MemoryRouter initialEntries={["/modify"]}>
          <App />
        </MemoryRouter>,
      );

      const button = screen.getByRole("button", { name: buttonText });

      await fireEvent.submit(button);

      const title = await screen.findByRole("heading", {
        name: "Your visited hotels:",
      });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it is rendered on the hotelsPage and the user clicks on the 'Hesperia Hotel' modify button", () => {
    test("Then it should go to the ModifyHotelPage", async () => {
      const buttonText = "modify";

      customRenderWithoutBrowserRouter(
        <MemoryRouter initialEntries={["/hotels"]}>
          <App />
        </MemoryRouter>,
      );

      const button = screen.getAllByRole("button", { name: buttonText });

      await userEvent.click(button[0]);

      const title = await screen.findByRole("heading", {
        name: "Modify your hotel:",
      });

      expect(title).toBeInTheDocument();
    });
  });
});
