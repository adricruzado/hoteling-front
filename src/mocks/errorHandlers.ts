import { http, HttpResponse } from "msw";

export const errorHandlers = [
  http.delete(
    `${import.meta.env.VITE_API_URL}/hotels/656492010f2c29b15944b0d8`,
    () => HttpResponse.error(),
  ),
];
