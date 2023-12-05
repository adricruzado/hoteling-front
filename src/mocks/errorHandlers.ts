import { http, HttpResponse } from "msw";

const errorHandlers = [
  http.get(`${import.meta.env.VITE_API_URL}/hotels`, () => {
    return HttpResponse.error();
  }),
  http.delete(
    `${import.meta.env.VITE_API_URL}/hotels/656492010f2c29b15944b0d8`,
    () => {
      return HttpResponse.error();
    },
  ),
];

export default errorHandlers;
