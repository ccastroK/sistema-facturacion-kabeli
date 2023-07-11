import { ChangeEvent, FormEvent } from "react";
import { IButton } from "./global-components.interface";
export interface IInput {
  id: number;
  classname: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  options?: string[];
  label?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export interface CustomFormProps {
  inputs: any[];
  values: any[];
  setValues: (values: any[]) => void;
  button: IButton;
  onSubmit: (e: FormEvent) => void;
  extraButton?: IButton;
}
