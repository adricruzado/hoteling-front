import { screen } from "@testing-library/react";
import Header from "./Header";
import { customRender } from "../../testUtils/customRender";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with an alternative text 'hoteling logo'", () => {
      const expectedAltText = "hoteling logo";

      customRender(<Header />);

      const headerImage = screen.getByAltText(expectedAltText);

      expect(headerImage).toBeInTheDocument();
    });
  });
});
