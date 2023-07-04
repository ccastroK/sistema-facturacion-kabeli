"use client";

import { IListItemProps } from "@/Domain/interfaces/components/side-bar.interface";
import { faIcon } from "../shared/icons/fa-icons";

export const ListItem = ({
  className,
  onlyIcon,
  icon,
  onClick,
  name,
}: IListItemProps) => {
  return (
    <li className={className} onClick={onClick}>
      <main>
        {faIcon(icon)}
        {!onlyIcon ? name ? <article>{name}</article> : null : null}
      </main>
    </li>
  );
};
