"use client";
import { ListItem } from "./list-item";

type ListProps = {
  classNameSelected: string;
  className: string;
  onlyIcon: boolean;
  items: any[]; // tecnical debt
  rowItem: string;
  onClick: (id: number) => void;
  setOnlyIcon: (onlyIcon: boolean) => void;
};

export const List = ({
  classNameSelected,
  className,
  onlyIcon,
  items,
  rowItem,
  onClick,
  setOnlyIcon,
}: ListProps) => {
  return (
    <ul>
      <ListItem
        className={rowItem}
        onlyIcon={onlyIcon}
        icon={onlyIcon ? "faChevronRight" : "faChevronLeft"}
        onClick={() => setOnlyIcon(!onlyIcon)}
      />
      {items.map(({ id, selected, name, icon }) => (
        <ListItem
          onClick={() => onClick(id)}
          onlyIcon={onlyIcon}
          icon={icon}
          key={id}
          className={`${className} ${selected && classNameSelected}`}
          name={name}
        />
      ))}
    </ul>
  );
};
