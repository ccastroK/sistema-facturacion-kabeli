"use client";
import { signOut } from "next-auth/react";
import { IHeaderProps } from "@/Domain/interfaces/components/global-components.interface";
import styles from "./HeaderStyle.module.css";
import { FaIcon } from "../shared/icons/fa-icons";
import { User } from "./User";

export const HeaderTemplate = ({ userName, role }: IHeaderProps) => {
  // tecnical debt arreglar el llamado a user
  return (
    <header className={styles.header}>
      <section>
        <FaIcon icon="faBell" onClick={() => {}} />
        <User
          {...{
            className: styles.userInfo,
            name: userName,
            role: role,
            profileClassName: styles.circle,
          }}
        />
        <FaIcon
          icon="faRightFromBracket"
          onClick={() =>
            // CRW url dinámica .env
            signOut({ callbackUrl: "http://localhost:3000/login" })
          }
        />
      </section>
    </header>
  );
};
