import Button from "../Button/Button";
import HotelFormStyled from "./HotelFormStyled";

const HotelForm = (): React.ReactElement => {
  return (
    <HotelFormStyled className="form" autoComplete="off">
      <div className="form__row">
        <label className="form__label" htmlFor="hotel-name">
          Hotel name:
        </label>
        <input className="form__input" type="text" id="hotel-name" />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="country">
          Country:
        </label>
        <input className="form__input" type="text" id="country" />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="city">
          City:
        </label>
        <input className="form__input" type="text" id="city" />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="rating">
          Rating (from 0 to 10):
        </label>
        <input className="form__input" type="number" id="rating" />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="price">
          Price:
        </label>
        <input className="form__input" type="number" id="price" />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="picture">
          Picture URL:
        </label>
        <input className="form__input" type="url" id="picture" />
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
        />
      </div>
      <div className="form__row--checkbox">
        <label className="form__label--checkbox" htmlFor="checkbox">
          Favourite:
        </label>
        <input
          className="form__input--checkbox"
          type="checkbox"
          id="checkbox"
        />
      </div>
      <Button text="add hotel" />
    </HotelFormStyled>
  );
};

export default HotelForm;
