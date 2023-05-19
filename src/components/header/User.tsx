"use client";

import { Profile } from "./Profile";

type UserProps = {
  className: string;
  profileClassName:string;
  name:string;
  role:string
};

export const User = ({ className,profileClassName,name,role }: UserProps) => {
  return( <main className={className}>
    <Profile className={profileClassName}/>
    <article>
        <h5>{name}</h5>
        <h6>{role}</h6>
    </article>
  </main>
  )
};
