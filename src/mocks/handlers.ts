import { http, HttpResponse } from "msw";
import { apiHotelsMock } from "./apiHotelsMock";

const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/hotels`, () => {
    return HttpResponse.json(apiHotelsMock);
  }),
  http.delete(
    `${import.meta.env.VITE_API_URL}/hotels/656492010f2c29b15944b0d8`,
    () => {
      return HttpResponse.json({});
    },
  ),
];

export default handlers;
