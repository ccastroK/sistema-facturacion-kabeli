import { IButton } from "../interfaces/buttons/button-interface";

export const Button = ({ name, type, onClick }: IButton) => (
  <button type={type} onClick={onClick}>
    {name}
  </button>
);
