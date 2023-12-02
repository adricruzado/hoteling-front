import { screen } from "@testing-library/react";
import HotelsPage from "./HotelsPage";
import { customRender } from "../../testUtils/customRender";

describe("Given a HotelsPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Your visited hotels:'", () => {
      const hotelsPageHeadingText = "Your visited hotels:";

      customRender(<HotelsPage />);

      const hotelsPageHeading = screen.getByRole("heading", {
        name: hotelsPageHeadingText,
      });

      expect(hotelsPageHeading).toBeInTheDocument();
    });
  });
});
