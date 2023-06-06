"use client";
import { useState } from "react";

import styles from "./SideBarStyle.module.css";
import { ListItem } from "./ListItem";

import { menuItemList } from "./mocks/menuListMock";

export const SideBar = () => {
  const [items, setItems] = useState(menuItemList);
  const handleCLick = (id: number) => {
    setItems(
      items.map((item) => ({ ...item, selected: id == item.id ? true : false }))
    );
  };

  return (
    <aside className={styles.container}>
      <ul className={styles.list}>
        {items.map((item) => (
          <ListItem
            onClick={() => handleCLick(item.id)}
            key={item.id}
            className={styles.listItem}
            selected={item.selected ? styles.circleClicked : styles.circle}
            name={item.name}
          />
        ))}
      </ul>
    </aside>
  );
};
