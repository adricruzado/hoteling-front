import useHotelsApi from "../../hooks/useHotelsApi";
import { deleteHotelActionCreator } from "../../store/features/hotels/hotelsSlice";
import { HotelStructure } from "../../store/features/hotels/types";
import { useAppDispatch } from "../../store/hooks";
import Button from "../Button/Button";
import HotelCardStyled from "./HotelCardStyled";

interface HotelCardProps {
  hotel: HotelStructure;
}

const HotelCard = ({
  hotel: { picture, name, country, city, rating, price, isFavourite, _id },
}: HotelCardProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { deleteHotel } = useHotelsApi();

  const deleteHotelById = () => {
    deleteHotel(_id);
    dispatch(deleteHotelActionCreator(_id));
  };

  return (
    <HotelCardStyled className="hotel-card">
      <img
        className="hotel-card__image"
        src={picture}
        alt={name}
        width="300"
        height="169"
      />
      <h2 className="hotel-card__name">{name}</h2>
      <dl className="hotel-card__details">
        <dt className="hotel-card__detail">Country:</dt>
        <dd>{country}</dd>
      </dl>
      <dl className="hotel-card__details">
        <dt className="hotel-card__detail">City:</dt>
        <dd>{city}</dd>
      </dl>
      <dl className="hotel-card__details">
        <dt className="hotel-card__detail">Rating:</dt>
        <dd>{rating}/10</dd>
      </dl>
      <dl className="hotel-card__details">
        <dt className="hotel-card__detail">Price:</dt>
        <dd>{price}€/night</dd>
      </dl>
      <dl className="hotel-card__details">
        <dt className="hotel-card__detail">Favourite:</dt>
        <dd>{isFavourite ? "✅" : "❌"}</dd>
      </dl>
      <Button text="modify" />
      <Button text="delete" actionOnClick={deleteHotelById} />
    </HotelCardStyled>
  );
};

export default HotelCard;
