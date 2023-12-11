import { renderHook, screen } from "@testing-library/react";
import { apiHotelsMock } from "../mocks/apiHotelsMock";
import useHotelsApi from "./useHotelsApi";
import { providerWrapper } from "../testUtils/providerWrapper";
import { mockWithNewHotel } from "../mocks/mockWithNewHotel";
import { server } from "../mocks/node";
import { errorHandlers } from "../mocks/errorHandlers";
import { customRenderWithoutBrowserRouter } from "../testUtils/customRender";
import { MemoryRouter } from "react-router-dom";
import App from "../components/App/App";

describe("Given a useHotelsApi hook", () => {
  const newHotel = mockWithNewHotel[2];
  describe("When it is called with its getHotels function", () => {
    test("Then it should return the information of 'Four Seasons Hotel George V' and 'The Ritz-Carlton'", async () => {
      const expectedHotels = apiHotelsMock;

      const {
        result: {
          current: { getHotels },
        },
      } = renderHook(() => useHotelsApi(), { wrapper: providerWrapper });

      const hotels = await getHotels();

      expect(hotels).toStrictEqual(expectedHotels);
    });
  });

  describe("When it is called with its deleteHotel function with an hotel id", () => {
    test("Then it should delete the 'Four Seasons Hotel George V' hotel", async () => {
      const expectedHotelId = apiHotelsMock[0]._id;
      const expectedResponse = {};

      const {
        result: {
          current: { deleteHotel },
        },
      } = renderHook(() => useHotelsApi(), { wrapper: providerWrapper });

      const response = await deleteHotel(expectedHotelId);

      expect(response).toStrictEqual(expectedResponse);
    });
  });

  describe("When it is called with its addHotel function with an 'Hesperia Hotel' hotel", () => {
    test("Then it should receive the 'Hesperia Hotel' hotel from the API rest", async () => {
      const {
        result: {
          current: { addHotel },
        },
      } = renderHook(() => useHotelsApi(), { wrapper: providerWrapper });

      const response = await addHotel(newHotel);

      expect(response).toStrictEqual(newHotel);
    });
  });

  describe("When it is called with its addHotel function with an 'Hesperia Hotel' hotel and the response fails", () => {
    test("Then it should show the text 'Sorry! We couldn't create the hotel.' as a feedback message", async () => {
      server.use(...errorHandlers);

      const feedbackMessage = "Sorry! We couldn't create the hotel.";

      customRenderWithoutBrowserRouter(
        <MemoryRouter initialEntries={["/create"]}>
          <App />
        </MemoryRouter>,
      );

      const {
        result: {
          current: { addHotel },
        },
      } = renderHook(() => useHotelsApi(), { wrapper: providerWrapper });

      await addHotel(newHotel);
      const feedback = await screen.findByText(feedbackMessage);

      expect(feedback).toBeInTheDocument();
    });
  });

  describe("When its called with its loadSelectedHotel function with an 'Hesperia Hotel' hotel", () => {
    test("Then it should return the 'Hesperia Hotel'", async () => {
      const expectedHotelId = newHotel._id;
      const expectedHotelDescription =
        "The Hesperia Hotel in Barcelona is an icon of luxury and sophistication. It offers luxurious rooms with stunning views, impeccable service, and an ideal location in the heart of Manhattan, close to the city's iconic landmarks.";

      customRenderWithoutBrowserRouter(
        <MemoryRouter initialEntries={["/hotels/626492220f2c29b159453185"]}>
          <App />
        </MemoryRouter>,
      );

      const {
        result: {
          current: { loadSelectedHotel },
        },
      } = renderHook(() => useHotelsApi(), { wrapper: providerWrapper });

      await loadSelectedHotel(expectedHotelId);
      const hotel = await screen.getByText(expectedHotelDescription);

      expect(hotel).toBeInTheDocument();
    });
  });

  describe("When it is called with its loadSelectedHotel function with an 'Hesperia Hotel' hotel and the response fails", () => {
    test("Then it should show the text 'Sorry! We couldn't select the hotel.' as a feedback message", async () => {
      server.use(...errorHandlers);

      const expectedHotelId = newHotel._id;
      const feedbackMessage = "Sorry! We couldn't select the hotel.";

      customRenderWithoutBrowserRouter(
        <MemoryRouter initialEntries={["/hotels/626492220f2c29b159453186"]}>
          <App />
        </MemoryRouter>,
      );

      const {
        result: {
          current: { loadSelectedHotel },
        },
      } = renderHook(() => useHotelsApi(), { wrapper: providerWrapper });

      await loadSelectedHotel(expectedHotelId);
      const feedback = await screen.findByText(feedbackMessage);

      expect(feedback).toBeInTheDocument();
    });
  });

  describe("When it is called with its modifyHotel function with an 'Hesperia Hotel' hotel", () => {
    test("Then it should show the text 'Great! The hotel has been modified.' as a feedback message", async () => {
      const feedbackMessage = "Great! The hotel has been modified.";

      customRenderWithoutBrowserRouter(
        <MemoryRouter
          initialEntries={["/hotels/626492220f2c29b159453185/modify"]}
        >
          <App />
        </MemoryRouter>,
      );

      const {
        result: {
          current: { modifyHotel },
        },
      } = renderHook(() => useHotelsApi(), { wrapper: providerWrapper });

      await modifyHotel(mockWithNewHotel[2]._id);
      const feedback = await screen.findByText(feedbackMessage);

      expect(feedback).toBeInTheDocument();
    });
  });

  describe("When it is called with its modifyHotel function with an 'Hesperia Hotel' hotel and the response fails", () => {
    test("Then it should show the text 'Sorry! We couldn't select the hotel.' as a feedback message", async () => {
      server.use(...errorHandlers);

      const expectedHotelId = mockWithNewHotel[2]._id;
      const feedbackMessage = "Sorry! We couldn't modify the hotel.";

      customRenderWithoutBrowserRouter(
        <MemoryRouter
          initialEntries={["/hotels/626492220f2c29b159453185/modify"]}
        >
          <App />
        </MemoryRouter>,
      );

      const {
        result: {
          current: { modifyHotel },
        },
      } = renderHook(() => useHotelsApi(), { wrapper: providerWrapper });

      await modifyHotel(expectedHotelId);
      const feedback = await screen.findByText(feedbackMessage);

      expect(feedback).toBeInTheDocument();
    });
  });
});
