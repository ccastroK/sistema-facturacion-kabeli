import { IButton } from "@/domain/interfaces/components/global-components.interface";
import { FaIcon } from "../icons/fa-icons";

export const Button = ({ name, type, onClick, icon, className }: IButton) => (
  <button className={className} type={type} onClick={onClick}>
    {icon && FaIcon({ icon })}
    {name}
  </button>
);
