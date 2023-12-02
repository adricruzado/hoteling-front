import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image of an airplane with the alternative text 'loading'", () => {
      const expectedAltText = "loading";

      customRender(<Loading />);

      const loadingImage = screen.getByAltText(expectedAltText);

      expect(loadingImage).toBeInTheDocument();
    });

    test("Then it should show the text 'Loading...'", () => {
      const expectedText = "Loading...";

      customRender(<Loading />);

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
