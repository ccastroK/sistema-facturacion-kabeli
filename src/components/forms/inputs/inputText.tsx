"use client";

import { ChangeEvent } from "react";

type InputTextProps = {
  nombre: string;
  placeholder: string;
  classname: string;
  value:string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
};

export const InputText = ({
  nombre,
  placeholder,
  classname,
  value,
  onChange
}: InputTextProps) => {
  return (
    <section className={classname}>
      <h6>{nombre}</h6>
      <input onChange={onChange} type="text" placeholder={placeholder}/>
    </section>
  );
};
