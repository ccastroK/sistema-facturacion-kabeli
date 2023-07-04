"use client";
import { useState } from "react";

import styles from "./SideBarStyle.module.css";

import { menuItemList } from "./mocks/menuListMock";
import { Logo } from "../shared/Logo";
import { List } from "./List";

export const SideBar = () => {
  const [items, setItems] = useState(menuItemList);
  const [onlyIcon, setOnlyIcon] = useState(true);
  const handleCLick = (id: number) => {
    setItems(
      items.map((item) => ({ ...item, selected: id == item.id ? true : false }))
    );
  };

  return (
    <aside
      className={
        onlyIcon
          ? `${styles.container} ${styles.active}`
          : `${styles.container} ${styles.inactive}`
      }
    >
      <Logo
        src={onlyIcon ? "/factfy-icon.png" : "/factfy.png"}
        alt="logo"
        className={onlyIcon ? styles.logoIcon : styles.logo}
        onClick={() => {}}
      />
      <List
        items={items}
        classNameSelected={onlyIcon ? styles.selectedIcon : styles.selectedText}
        className={
          onlyIcon
            ? `${styles.listItem} ${styles.listIcon}`
            : `${styles.listItem} ${styles.listText}`
        }
        onlyIcon={onlyIcon}
        onClick={handleCLick}
        setOnlyIcon={setOnlyIcon}
        rowItem={
          onlyIcon
            ? `${styles.listItem} ${styles.listIcon}`
            : `${styles.listItem} ${styles.rowItem} `
        }
      />
    </aside>
  );
};
