import axios from "axios";
import { useCallback } from "react";
import { HotelStructure } from "../store/features/hotels/types";
import { useAppDispatch } from "../store/hooks";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";

const useHotelsApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const dispatch = useAppDispatch();

  const getHotels = useCallback(async () => {
    dispatch(showLoadingActionCreator());

    const { data: hotels } = await axios.get<{ hotels: HotelStructure[] }>(
      "/hotels",
    );

    dispatch(hideLoadingActionCreator());

    return hotels;
  }, [dispatch]);

  return { getHotels };
};

export default useHotelsApi;
