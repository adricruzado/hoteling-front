import { http, HttpResponse } from "msw";

export const errorHandlers = [
  http.get(`${import.meta.env.VITE_API_URL}/hotels`, () =>
    HttpResponse.error(),
  ),
  http.delete(
    `${import.meta.env.VITE_API_URL}/hotels/656492010f2c29b15944b0d8`,
    () => HttpResponse.error(),
  ),
  http.post(`${import.meta.env.VITE_API_URL}/hotels/create`, () =>
    HttpResponse.error(),
  ),
  http.get(
    `${import.meta.env.VITE_API_URL}/hotels/626492220f2c29b159453185`,
    () => HttpResponse.error(),
  ),
  http.patch(
    `${import.meta.env.VITE_API_URL}/hotels/626492220f2c29b159453185`,
    () => HttpResponse.error(),
  ),
];
