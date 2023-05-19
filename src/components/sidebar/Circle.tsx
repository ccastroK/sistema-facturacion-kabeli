"use client";
import styles from './SideBarStyle.module.css'
type CircleProps = {
  selected:boolean
  onClick:()=>void
};

export const Circle = ({ selected,onClick}: CircleProps) => {
  return <main onClick={onClick} className={selected ? styles.circleClicked : styles.circle}>
  </main>;
};
