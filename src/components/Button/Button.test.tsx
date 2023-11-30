import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives a text 'modify'", () => {
    test("Then it should show the text 'modify'", () => {
      const expectedButtonText = "modify";

      customRender(<Button text={expectedButtonText} />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives a text 'delete'", () => {
    test("Then it should show the text 'delete'", () => {
      const expectedButtonText = "delete";

      customRender(<Button text={expectedButtonText} />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
