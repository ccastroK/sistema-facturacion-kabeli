"use client";
import { faIcon } from "../shared/icons/fa-icons";

type ListItemProps = {
  className: string;
  onlyIcon: boolean;
  icon: string;
  onClick: () => void;
  name?: string;
};

export const ListItem = ({
  className,
  onlyIcon,
  icon,
  onClick,
  name,
}: ListItemProps) => {
  return (
    <li className={className} onClick={onClick}>
      <main>
        {faIcon(icon)}
        {!onlyIcon ? name ? <article>{name}</article> : null : null}
      </main>
    </li>
  );
};
