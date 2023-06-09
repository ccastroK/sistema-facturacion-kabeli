import { ChangeEvent, FormEvent } from "react";
import { IButton } from "./global-components.interface";
import { IReferenceTextProps } from "@/components/shared/forms/reference-text";
export interface IInput {
  id: number;
  className: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  options?: string[];
  label?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  referenceTexts: Array<IReferenceTextProps>
}
export interface CustomFormProps {
  inputs: IInput[];
  values: IInput[];
  setValues: (values: IInput[]) => void;
  button: IButton;
  onSubmit: (e: FormEvent) => void;
  extraButton?: IButton;
}
