"use client";

import { IIconProps } from "@/Domain/interfaces/components/global-components.interface";

export const Icon = ({ src, className, alt, onClick }: IIconProps) => {
  return (
    <figure className={className}>
      <a onClick={onClick}>
        <img src={src} alt={alt} />
      </a>
    </figure>
  );
};
