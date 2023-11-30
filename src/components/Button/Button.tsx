import { PropsWithChildren } from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps extends PropsWithChildren {
  text: string;
}

const Button = ({ text }: ButtonProps): React.ReactElement => {
  return <ButtonStyled>{text}</ButtonStyled>;
};

export default Button;
