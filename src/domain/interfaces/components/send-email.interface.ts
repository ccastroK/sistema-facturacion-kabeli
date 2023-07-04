import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { FormEvent } from "react";

export interface ISendEmailForm {
  email: any;
  setNewEmail: (newDataPassword: any[]) => void;
  router: AppRouterInstance;
  handleSubmitCreate?: (e: FormEvent) => Promise<void>;
  handleSubmitForgot?: (e: FormEvent) => Promise<void>;
}
export interface ISendCreateProps {
  type: string;
}
export interface ISendEmailProp {
  Logo:JSX.Element,
  Welcome:JSX.Element,
  CustomForm:JSX.Element
}