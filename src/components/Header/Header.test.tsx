import { screen } from "@testing-library/react";
import Header from "./Header";
import customRender from "../../testUtils/customRender";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an hoteling logo", () => {
      const expectedText = "hoteling logo";

      customRender(<Header />);

      const headerImage = screen.getByRole("img", {
        name: expectedText,
      });

      expect(headerImage).toBeInTheDocument();
    });
  });
});
