import axios from "axios";
import { useCallback } from "react";
import { HotelStructure } from "../store/features/hotels/types";

const useHotelsApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const getHotels = useCallback(async () => {
    const { data: hotels } = await axios.get<{ hotels: HotelStructure[] }>(
      "/hotels",
    );

    return hotels;
  }, []);

  return { getHotels };
};

export default useHotelsApi;
