"use client";
import { useState } from "react";

import styles from "./sidebar-style.module.css";

import { List } from "./List";
import { menuItemList } from "./mocks/menu-list-mock";
import { Logo } from "../shared/logo";

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
        src={onlyIcon ? "/logo-slykash.png" : "/slykash.png"}
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
