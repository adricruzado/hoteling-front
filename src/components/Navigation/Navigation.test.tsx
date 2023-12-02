import { screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { customRender } from "../../testUtils/customRender";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Home' link", () => {
      const expectedHomeText = "Home";

      customRender(<Navigation />);

      const navigationHomeLink = screen.getByRole("link", {
        name: expectedHomeText,
      });

      expect(navigationHomeLink).toBeInTheDocument();
    });

    test("Then it should show an 'Add hotel' link", () => {
      const expectedAddHotelText = "Add hotel";

      customRender(<Navigation />);

      const navigationAddHotelLink = screen.getByRole("link", {
        name: expectedAddHotelText,
      });

      expect(navigationAddHotelLink).toBeInTheDocument();
    });
  });
});
