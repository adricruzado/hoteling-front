import axios from "axios";
import { useCallback } from "react";
import { HotelStructure, HotelWithoutId } from "../store/features/hotels/types";
import { useAppDispatch } from "../store/hooks";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { addHotelActionCreator } from "../store/features/hotels/hotelsSlice";

const useHotelsApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const getHotels = useCallback(async () => {
    try {
      dispatch(showLoadingActionCreator());

      const { data: hotels } = await axios.get<{ hotels: HotelStructure[] }>(
        "/hotels",
      );

      dispatch(hideLoadingActionCreator());

      return hotels;
    } catch (error) {
      dispatch(hideLoadingActionCreator());

      throw new Error((error as Error).message);
    }
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

        navigate("/");

        return data;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error("Sorry! We couldn't delete the hotel.", {
          theme: "colored",
        });
      }
    },
    [dispatch, navigate],
  );

  const addHotel = useCallback(
    async (newHotel: HotelWithoutId): Promise<HotelWithoutId | undefined> => {
      try {
        dispatch(showLoadingActionCreator());

        const {
          data: { hotel },
        } = await axios.post<{ hotel: HotelStructure }>(
          "/hotels/create",
          newHotel,
        );

        dispatch(addHotelActionCreator(hotel));

        toast.success("Great! The hotel has been created.", {
          theme: "colored",
        });

        dispatch(hideLoadingActionCreator());

        navigate("/");

        return hotel;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error("Sorry! We couldn't create the hotel.", {
          theme: "colored",
        });
      }
    },
    [dispatch, navigate],
  );

  const loadSelectedHotel = useCallback(
    async (id: string): Promise<HotelStructure | void> => {
      try {
        dispatch(showLoadingActionCreator());

        const {
          data: { hotel },
        } = await axios.get<{ hotel: HotelStructure }>(`/hotels/${id}`);

        dispatch(hideLoadingActionCreator());

        return hotel;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error("Sorry! We couldn't select the hotel.", {
          theme: "colored",
        });
      }
    },
    [dispatch],
  );

  const modifyHotel = useCallback(
    async (id: string): Promise<HotelStructure | void> => {
      try {
        dispatch(showLoadingActionCreator());

        const {
          data: { hotel },
        } = await axios.patch<{ hotel: HotelStructure }>(`/hotels/${id}`);

        dispatch(hideLoadingActionCreator());

        toast.success("Great! The hotel has been modified.", {
          theme: "colored",
        });

        navigate("/");

        return hotel;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error("Sorry! We couldn't modify the hotel.", {
          theme: "colored",
        });
      }
    },
    [dispatch, navigate],
  );

  return { getHotels, deleteHotel, addHotel, loadSelectedHotel, modifyHotel };
};

export default useHotelsApi;
