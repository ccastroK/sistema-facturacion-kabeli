import { ChangeEvent, FormEvent } from "react";
import { IButton } from "@/Domain/interfaces/components/global-components.interface";
import { TReferState } from "@/Domain/type/form-type";


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
  referenceTexts?: Array<IReferenceTextProps>
}
export interface CustomFormProps {
  inputs: IInput[];
  values: IInput[];
  setValues: (values: IInput[]) => void;
  button: IButton;
  onSubmit: (e: FormEvent) => void;
  extraButton?: IButton;
}
export interface IFormClasses {
  form: string;
  inputsContainer: string;
  buttonsContainer: string;
  referenceText: IReferenceState;
}

export interface IReferenceState {
  none: string;
  success: string;
  info: string;
  error: string;
  warning: string;
}

export interface CustomFormProps {
  inputs: IInput[];
  values: IInput[];
  button: IButton;
  setValues: (values: IInput[]) => void;
  onSubmit: (e: FormEvent) => void;

  classes: IFormClasses;
  referenceTexts?: IReferenceTextProps[];
  extraButton?: IButton;
}
export interface IValidateInputData {
  newValue: string;
  type?: string;
}

export interface IReferenceTextProps {
  state: TReferState;
  stateClassName: string;
  text: string;
  icon?: string;
}

export interface IReferenceTextProps {
  state: TReferState;
  stateClassName: string;
  text: string;
  icon?: string;
}