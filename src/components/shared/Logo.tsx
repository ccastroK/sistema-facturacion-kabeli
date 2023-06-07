"use client";
type LogoProps = {
  src: string;
  alt: string;
  onClick: () => void;
  className?: string;
};

export const Logo = ({ src, alt, onClick, className }: LogoProps) => {
  return (
    <figure className={className}>
      <a onClick={onClick}>
        <img src={src} alt={alt} />
      </a>
    </figure>
  );
};
