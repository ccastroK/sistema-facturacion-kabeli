"use client";
import { useState } from "react";

import styles from "./sidebar-style.module.css";
import { ListItem } from "./list-item";

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
      <ul>
        <ListItem
          className={
            onlyIcon
              ? `${styles.listItem}`
              : `${styles.listItem} ${styles.listInactive} ${styles.rowItem}`
          }
          onlyIcon={onlyIcon}
          icon={onlyIcon ? "faChevronRight" : "faChevronLeft"}
          onClick={() => setOnlyIcon(!onlyIcon)}
        />
        {items.map(({ id, selected, name, icon }) => (
          <ListItem
            onClick={() => handleCLick(id)}
            onlyIcon={onlyIcon}
            icon={icon}
            key={id}
            className={
              onlyIcon
                ? `${styles.listItem} ${styles.listIcon} ${
                    selected ? styles.selectedIcon : ""
                  }`
                : `${styles.listItem} ${styles.listText} ${
                    selected ? styles.selectedItem : ""
                  }`
            }
            name={name}
          />
        ))}
      </ul>
    </aside>
  );
};
