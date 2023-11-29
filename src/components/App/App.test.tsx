import { screen } from "@testing-library/react";
import App from "./App";
import customRender from "../../testUtils/customRender";

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
});
