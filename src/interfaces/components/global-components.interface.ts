export interface ITitleProps {
  title: string;
  classname?: string;
}
export interface IProfileProps {
  className: string;
}
export interface ILogoProps {
  src: string;
  alt: string;
  onClick: () => void;
  className?: string;
}

export interface IIconProps {
  src: string;
  className: string;
  alt: string;
  onClick: () => void;
}

export interface ICustomListProp {
  title?: string;
  item: string[];
  className?: string;
}

export interface IAProps {
  name: string;
  url: string;
}

export interface IButton {
  name: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void | undefined;
  icon?: string | undefined;
}

export interface IHeaderProps {
  userName: string;
  role: string;
}
export interface IUserProps {
  className: string;
  profileClassName: string;
  name: string;
  role: string;
}
