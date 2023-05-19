"use client"
type IconProps = {
  src: string;
  className: string;
  alt: string;
  onClick: () => void;
};

export const Icon = ({ src, className, alt, onClick }: IconProps) => {
  return (
    <figure className={className}>
      <a onClick={onClick}>
        <img src={src} alt={alt} />
      </a>
    </figure>
  );
};
