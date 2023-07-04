"use client";
import { IUserProps } from "@/Domain/interfaces/components/global-components.interface";
import { Profile } from "../shared/Profile";

export const User = ({
  className,
  profileClassName,
  name,
  role,
}: IUserProps) => {
  return (
    <main className={className}>
      <Profile className={profileClassName} />
      <article>
        <h5>{name}</h5>
        <h6>{role}</h6>
      </article>
    </main>
  );
};
