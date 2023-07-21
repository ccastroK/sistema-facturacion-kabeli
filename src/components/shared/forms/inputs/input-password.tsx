"use client";

import { IInput } from "@/domain/interfaces/components/form.interface";
import { useState } from "react";
import { FaIcon } from "../../icons/fa-icons";

export const InputPassword = ({
  id,
  type,
  placeholder,
  value,
  onChange,
}: IInput) => {
  const [viewText, setViewText] = useState(type);

  const handleClick = () => {
    setViewText(viewText === 'password' ? 'text' : 'password');
  }

  return (
    <>
      <input
        key={id}
        type={viewText}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <FaIcon icon={viewText === 'password' ? 'faEye' : 'faEyeSlash'} onClick={handleClick}/>
    </>
  );
};
