"use client";

import { IInput } from "@/domain/interfaces/components/form.interface";

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
