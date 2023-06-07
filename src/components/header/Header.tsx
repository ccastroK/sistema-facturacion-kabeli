"use client";
import styles from "./HeaderStyle.module.css";
import { Icon } from "../shared/Icon";
import { User } from "./User";

type HeaderProps = {
  userName: string;
  role: string;
};

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

export const HeaderTemplate = ({ userName, role }: HeaderProps) => {
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
