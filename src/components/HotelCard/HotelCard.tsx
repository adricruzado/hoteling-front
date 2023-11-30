import { HotelStructure } from "../../store/features/hotels/types";
import HotelCardStyled from "./HotelCardStyled";

interface HotelCardProps {
  hotel: HotelStructure;
}

const HotelCard = ({
  hotel: { picture, name, country, city, rating, price, isFavourite },
}: HotelCardProps): React.ReactElement => {
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
    </HotelCardStyled>
  );
};

export default HotelCard;
