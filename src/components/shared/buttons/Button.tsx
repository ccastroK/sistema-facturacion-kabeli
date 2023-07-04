import { IButton } from "@/Domain/interfaces/components/global-components.interface";
import { faIcon } from "../icons/fa-icons";

export const Button = ({ name, type, onClick, icon, className }: IButton) => (
  <button className={className} type={type} onClick={onClick}>
    {icon && faIcon(icon)}
    {name}
  </button>
);
