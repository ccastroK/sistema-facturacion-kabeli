import { alertOptions } from "@/Domain/type/custom-alert-type";
import { ReactNode } from "react";

export interface ITitleProps {
  title: string;
  classname?: string;
  onClick?: () => void;
  icon?:string;
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
  icon?: string;
  className?: string;
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

export interface IViewMessage {
  Logo: JSX.Element;
  Title: JSX.Element;
  faIcon: JSX.Element;
  Button: JSX.Element;
  text: string;
  classname: string;
}

export interface ICustomAlert {
  type:alertOptions;
  message:string;
  onClick:() =>void
}
export interface ICustomContainer {
  children:ReactNode;
}