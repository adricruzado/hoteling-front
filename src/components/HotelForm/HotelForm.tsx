import { useState } from "react";
import {
  HotelStructure,
  HotelWithoutId,
} from "../../store/features/hotels/types";
import Button from "../Button/Button";
import HotelFormStyled from "./HotelFormStyled";

interface HotelFormProps {
  onSubmit: (hotel: HotelWithoutId) => void;
  selectedHotel?: HotelStructure;
  buttonText: string;
}

const HotelForm = ({
  onSubmit,
  selectedHotel,
  buttonText,
}: HotelFormProps): React.ReactElement => {
  let emptyHotel: HotelWithoutId = {
    name: "",
    country: "",
    city: "",
    picture: "",
    price: 0,
    rating: 0,
    description: "",
    isFavourite: false,
  };

  if (selectedHotel) {
    emptyHotel = selectedHotel;
  }
  const [newHotel, setNewHotel] = useState<HotelWithoutId>(emptyHotel);

  const onChangeData = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNewHotel({
      ...newHotel,
      [event.target.id]:
        event.target.type !== "checkbox"
          ? (event.target as HTMLInputElement).value
          : (event.target as HTMLInputElement).checked,
    });
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(newHotel);

    scrollTo(0, 0);
  };

  return (
    <HotelFormStyled
      className="form"
      autoComplete="off"
      onSubmit={onFormSubmit}
    >
      <div className="form__row">
        <label className="form__label" htmlFor="name">
          Hotel name:
        </label>
        <input
          className="form__input"
          type="text"
          id="name"
          onChange={onChangeData}
          value={newHotel.name}
        />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="country">
          Country:
        </label>
        <input
          className="form__input"
          type="text"
          id="country"
          onChange={onChangeData}
          value={newHotel.country}
        />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="city">
          City:
        </label>
        <input
          className="form__input"
          type="text"
          id="city"
          onChange={onChangeData}
          value={newHotel.city}
        />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="rating">
          Rating (from 0 to 10):
        </label>
        <input
          className="form__input"
          type="number"
          id="rating"
          min={0}
          max={10}
          onChange={onChangeData}
          value={newHotel.rating}
        />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="price">
          Price (€):
        </label>
        <input
          className="form__input"
          type="number"
          id="price"
          onChange={onChangeData}
          value={newHotel.price}
        />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="picture">
          Picture URL:
        </label>
        <input
          className="form__input"
          type="url"
          id="picture"
          onChange={onChangeData}
          value={newHotel.picture}
        />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="description">
          Description:
        </label>
        <textarea
          className="form__input"
          id="description"
          rows={10}
          cols={30}
          onChange={onChangeData}
          value={newHotel.description}
        />
      </div>
      <div className="form__row--checkbox">
        <label className="form__label--checkbox" htmlFor="isFavourite">
          Favourite:
        </label>
        <input
          className="form__input--checkbox"
          type="checkbox"
          id="isFavourite"
          onChange={onChangeData}
        />
      </div>
      <Button text={buttonText} />
    </HotelFormStyled>
  );
};

export default HotelForm;
