import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a text '404'", () => {
      const expectedText = "404";

      customRender(<NotFoundPage />);

      const notFoundPage = screen.getByText(expectedText);

      expect(notFoundPage).toBeInTheDocument();
    });

    test("Then it should show a text 'Not found...'", () => {
      const expectedNotFoundText = "Not found...";

      customRender(<NotFoundPage />);

      const notFoundPage = screen.getByText(expectedNotFoundText);

      expect(notFoundPage).toBeInTheDocument();
    });

    test("Then it should show a text 'Please go back to homepage'", () => {
      const expectedFeedbackText = "Please go back to homepage.";

      customRender(<NotFoundPage />);

      const notFoundPage = screen.getByText(expectedFeedbackText);

      expect(notFoundPage).toBeInTheDocument();
    });
  });
});
