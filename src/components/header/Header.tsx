"use client";
import styles from "./HeaderStyle.module.css";
import { User } from "./User";
import { Icon } from "../shared/Icon";
import { IHeaderProps } from "@/domain/interfaces/components/global-components.interface";

const Icons = {
  logo: {
    src: "logo_kabeli.png",
    alt: "Logo Kabeli",
    className: styles.logoKabeli,
    onClick: () => {},
  },
  notification: {
    src: "/notificacion.png",
    alt: "Alerta",
    onClick: () => {},
  },
  exit: {
    src: "/salida-de-emergencia.png",
    alt: "Salida",
    onClick: () => {},
  },
  className: styles.icons,
};

export const HeaderTemplate = ({ userName, role }: IHeaderProps) => {
  return (
    <header className={styles.header}>
      <section>
        <Icon className={Icons.className} {...Icons.notification} />
        <User
          {...{
            className: styles.userInfo,
            name: userName,
            role: role,
            profileClassName: styles.circle,
          }}
        />
      </section>
    </header>
  );
};
