import axios from "axios";
import { useCallback } from "react";
import { HotelStructure } from "../store/features/hotels/types";
import { useAppDispatch } from "../store/hooks";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";
import { toast } from "react-toastify";

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

  const deleteHotel = useCallback(
    async (hotelId: string) => {
      try {
        dispatch(showLoadingActionCreator());

        const { data } = await axios.delete(`/hotels/${hotelId}`);

        toast.success("Great! The hotel has been deleted.", {
          theme: "colored",
        });

        dispatch(hideLoadingActionCreator());

        return data;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error("Sorry! We couldn't delete the hotel.", {
          theme: "colored",
        });
      }
    },
    [dispatch],
  );

  return { getHotels, deleteHotel };
};

export default useHotelsApi;
