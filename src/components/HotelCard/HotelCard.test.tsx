import { screen, waitFor } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import HotelCard from "./HotelCard";
import { apiHotelMock } from "../../mocks/apiHotelMock";
import userEvent from "@testing-library/user-event";
import { server } from "../../mocks/node";
import { errorHandlers } from "../../mocks/errorHandlers";

describe("Given an HotelCard component", () => {
  describe("When it receives a 'Four Seasons Hotel George V' hotel", () => {
    test("Then it should show the text 'Four Seasons Hotel George V' in a heading", () => {
      const expectedHotel = apiHotelMock.name;

      customRender(<HotelCard hotel={apiHotelMock} />);

      const hotel = screen.getByRole("heading", {
        name: expectedHotel,
      });

      expect(hotel).toBeInTheDocument();
    });

    test("Then it should show an image with the alternative text 'Four Seasons Hotel George V'", () => {
      const expectedAltText = apiHotelMock.name;

      customRender(<HotelCard hotel={apiHotelMock} />);

      const hotelImage = screen.getByAltText(expectedAltText);

      expect(hotelImage).toBeInTheDocument();
    });

    test("Then it should show the emoji '✅'", () => {
      const expectedEmoji = "✅";

      customRender(<HotelCard hotel={apiHotelMock} />);

      const favouriteEmoji = screen.getByText(expectedEmoji);

      expect(favouriteEmoji).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'modify'", () => {
      const expectedButtonText = "modify";

      customRender(<HotelCard hotel={apiHotelMock} />);

      const button = screen.getByText(expectedButtonText);

      expect(button).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'delete'", () => {
      const expectedButtonText = "delete";

      customRender(<HotelCard hotel={apiHotelMock} />);

      const button = screen.getByText(expectedButtonText);

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives a click on the delete button of 'Four Seasons Hotel George V' hotel", () => {
    const expectedButtonText = "delete";
    test("Then it should not show the 'Four Seasons Hotel George V' hotel", async () => {
      const expectedHotelName = "Four Seasons Hotel George V";

      customRender(<HotelCard hotel={apiHotelMock} />);

      const button = screen.getByRole("button", { name: expectedButtonText });
      const heading = screen.getByRole("heading", { name: expectedHotelName });

      await userEvent.click(button);

      waitFor(() => {
        expect(heading).not.toBeInTheDocument();
      });
    });

    test("Then it should show a text 'Great! The hotel has been deleted.' as a feedback message", async () => {
      const expectedFeedbackMessage = "Great! The hotel has been deleted.";

      customRender(<HotelCard hotel={apiHotelMock} />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);

      await waitFor(() => {
        expect(screen.getByText(expectedFeedbackMessage)).toBeInTheDocument();
      });
    });

    test("Then it should show a text 'Sorry! We couldn't delete the hotel.' as a feedback message", async () => {
      server.use(...errorHandlers);

      const expectedFeedbackMessage = "Sorry! We couldn't delete the hotel.";

      customRender(<HotelCard hotel={apiHotelMock} />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);

      await waitFor(() => {
        expect(screen.getByText(expectedFeedbackMessage)).toBeInTheDocument();
      });
    });
  });
});
