"use client";
import styles from "./SideBarStyle.module.css";
type CircleProps = {
  className: string;
};

export const Circle = ({ className }: CircleProps) => {
  return <main className={className} />;
};
