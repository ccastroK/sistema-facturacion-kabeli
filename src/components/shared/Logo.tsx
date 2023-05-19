"use client"
type LogoProps = {
  src: string;
  className: string;
  alt: string;
  onClick: () => void;
};

export const Logo = ({ src, className, alt, onClick }: LogoProps) => {
  return (
    <figure className={className}>
      <a onClick={onClick}>
        <img src={src} alt={alt} />
      </a>
    </figure>
  );
};
