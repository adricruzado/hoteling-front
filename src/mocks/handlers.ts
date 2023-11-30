import { http, HttpResponse } from "msw";
import { apiHotelsMock } from "./apiHotelsMock";

const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/hotels`, () => {
    return HttpResponse.json(apiHotelsMock);
  }),
];

export default handlers;
