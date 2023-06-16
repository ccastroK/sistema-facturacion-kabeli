"use client";

import { ILogoProps } from "@/interfaces/components/global-components.interface";

export const Logo = ({ src, alt, onClick, className }: ILogoProps) => {
  return (
    <figure className={className}>
      <a onClick={onClick}>
        <img src={src} alt={alt} />
      </a>
    </figure>
  );
};
