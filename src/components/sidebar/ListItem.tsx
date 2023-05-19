"use client";
import { Circle } from "./Circle";

type ListItemProps = {
  className: string;
  name: string;
  selected: string;
  onClick: () => void;
};

export const ListItem = ({
  className,
  name,
  selected,
  onClick,
}: ListItemProps) => {
  return (
    <main className={className} onClick={onClick}>
      <Circle className={selected} />
      <article>{name}</article>
    </main>
  );
};
