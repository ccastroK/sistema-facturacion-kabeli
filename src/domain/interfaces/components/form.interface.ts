import { ChangeEvent, FormEvent } from "react";
import { IButton } from "./global-components.interface";
import { IReferenceTextProps } from "@/components/shared/forms/reference-text";
export interface IInput {
  id: number;
  className: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  options?: string[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  referenceTexts: Array<IReferenceTextProps>
}
export interface CustomFormProps {
  inputs: any[];
  values: any[];
  setValues: (values: any[]) => void;
  button: IButton;
  onSubmit: (e: FormEvent) => void;
  extraButton?: IButton;
}
