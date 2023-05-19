"use client";

import { Circle } from "./Circle";

type ListItemProps = {
  className: string;
  circleClassName:string;
  name:string;
};
export const ListItem = ({ className,name,circleClassName }: ListItemProps) => {

  return( 
    <main className={className}>
        <Circle className={circleClassName}/>
        <article>
          {name}
        </article>
    </main>
  )
};
