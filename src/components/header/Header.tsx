"use client";
import { signOut } from "next-auth/react"
import { IHeaderProps } from "@/Domain/interfaces/components/global-components.interface";
import styles from "./HeaderStyle.module.css";
import { User } from "./user";
import { FaIcon } from '../shared/icons/fa-icons';

export const HeaderTemplate = ({ userName, role }: IHeaderProps) => {


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
        <FaIcon icon="faRightFromBracket" onClick={()=> signOut({callbackUrl:'http://localhost:3000/login'})} />
      </section>
    </header>
  );
};
