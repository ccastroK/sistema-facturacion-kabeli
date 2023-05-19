"use client";
import { Circle } from "./Circle";

type ListItemProps = {
  className: string;
  name:string;
  selected:boolean;
  index:number;
  onClick:(index:number) => void
};

export const ListItem = ({ className,name,selected,onClick,index }: ListItemProps) => {

  return( 
    <main className={className}>
        <Circle onClick={()=>onClick(index)} selected={selected}/>
        <article>
          {name}
        </article>
    </main>
  )
};
