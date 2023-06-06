"use client";

import { IInput } from "../../interfaces/forms/inputs/input-interface";

export const InputText = ({
  id,
  type,
  placeholder,
  value,
  onChange,
}: IInput) => {
  return (
    <input
      key={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
