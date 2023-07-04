"use client";

import { IInput } from "@/Domain/interfaces/components/form.interface";



export const InputNumber = ({
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
