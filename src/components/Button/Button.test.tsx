import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  const actionMock = vi.fn();

  describe("When it receives a text 'modify'", () => {
    test("Then it should show the text 'modify'", () => {
      const expectedModifyButtonText = "modify";

      customRender(<Button text={expectedModifyButtonText} />);

      const button = screen.getByRole("button", {
        name: expectedModifyButtonText,
      });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives a text 'delete'", () => {
    test("Then it should show the text 'delete'", () => {
      const expectedDeleteButtonText = "delete";

      customRender(<Button text={expectedDeleteButtonText} />);

      const button = screen.getByRole("button", {
        name: expectedDeleteButtonText,
      });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives an action and a click from a user", () => {
    test("Then it should call the received function", async () => {
      const expectedButtonText = "modify";

      customRender(
        <Button text={expectedButtonText} actionOnClick={actionMock} />,
      );

      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);

      expect(actionMock).toHaveBeenCalledOnce();
    });
  });
});
