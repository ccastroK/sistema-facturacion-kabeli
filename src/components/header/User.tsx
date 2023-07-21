"use client";
import { IUserProps } from "@/Domain/interfaces/components/global-components.interface";
import { FaIcon } from "../shared/icons/fa-icons";


export const User = ({
  className,
  profileClassName,
  name,
  role,
}: IUserProps) => {
  return (
    <main className={className}>
      <FaIcon icon="faUser" onClick={() => {}}/>
      <article>
        <h5>{name}</h5>
        <h6>{role}</h6>
      </article>
    </main>
  );
};
