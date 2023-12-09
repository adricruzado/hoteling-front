import { useMemo } from "react";
import Button from "../../components/Button/Button";
import { loadSelectedHotelActionCreator } from "../../store/features/hotels/hotelsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import HotelDetailsPageStyled from "./HotelDetailsPageStyled";
import { useParams } from "react-router-dom";
import useHotelsApi from "../../hooks/useHotelsApi";

const HotelDetailsPage = (): React.ReactElement => {
  const { hotelId } = useParams();
  const dispatch = useAppDispatch();
  const { loadSelectedHotel } = useHotelsApi();
  const selectedHotel = useAppSelector(
    (state) => state.hotelsState.selectedHotel,
  );

  useMemo(async () => {
    const hotel = await loadSelectedHotel(hotelId!);

    dispatch(loadSelectedHotelActionCreator(hotel!));
  }, [dispatch, hotelId, loadSelectedHotel]);

  return (
    <HotelDetailsPageStyled>
      <div className="hotel-card">
        <img
          className="hotel-card__image"
          src={selectedHotel.picture}
          alt={selectedHotel.name}
          width="300"
          height="169"
        />
        <h2 className="hotel-card__name">{selectedHotel.name}</h2>
        <dl className="hotel-card__details">
          <dt className="hotel-card__detail">Country:</dt>
          <dd>{selectedHotel.country}</dd>
        </dl>
        <dl className="hotel-card__details">
          <dt className="hotel-card__detail">City:</dt>
          <dd>{selectedHotel.city}</dd>
        </dl>
        <dl className="hotel-card__details">
          <dt className="hotel-card__detail">Rating:</dt>
          <dd>{selectedHotel.rating}/10</dd>
        </dl>
        <dl className="hotel-card__details">
          <dt className="hotel-card__detail">Price:</dt>
          <dd>{selectedHotel.price}€/night</dd>
        </dl>
        <dl className="hotel-card__details">
          <dt className="hotel-card__detail">Favourite:</dt>
          <dd>{selectedHotel.isFavourite ? "✅" : "❌"}</dd>
        </dl>
        <dl className="hotel-card__details--description">
          <dt className="hotel-card__detail">Description:</dt>
          <dd>{selectedHotel.description}</dd>
        </dl>
        <Button text="modify" />
        <Button text="delete" />
      </div>
    </HotelDetailsPageStyled>
  );
};

export default HotelDetailsPage;
