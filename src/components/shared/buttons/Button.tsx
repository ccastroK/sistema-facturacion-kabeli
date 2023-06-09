import { IButton } from "../interfaces/buttons/button-interface";
import { faIcon } from "../icons/fa-icons";

export const Button = ({ name, type, onClick, icon }: IButton) => (
  <button type={type} onClick={onClick}>
    {icon && faIcon(icon)}
    {name}
  </button>
);
