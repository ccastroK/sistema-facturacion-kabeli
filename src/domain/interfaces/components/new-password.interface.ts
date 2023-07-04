import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { FormEvent } from "react";

export interface INewPasswordForm {
  handleSubmit: (e: FormEvent) => Promise<void>;
  password: any[];
  setNewPassword: (newDataPassword: any[]) => void;
  router: AppRouterInstance;
}
export interface INewPassowordProp {
  type: string;
  token: string;
}

export interface INewPasswordFromProps {
  Logo:JSX.Element,
  Welcome:JSX.Element,
  CustomForm:JSX.Element,
  CustomList:JSX.Element
}
