import { IInput } from "../interfaces/forms/inputs/input-interface";
import { Button } from "../buttons/Button";
import {
  IReferenceTextProps,
  ReferenceText,
  TReferState,
} from "./reference-text";
import { IButton } from "@/Domain/interfaces/components/global-components.interface";
import { ChangeEvent, FormEvent } from "react";
import { customInput } from "./custom-input";

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
  inputs: any[]; // tecnical debt
  values: any[]; // tecnical debt
  button: IButton;
  setValues: (values: any[]) => void; // tecnical debt
  onSubmit: (e: FormEvent) => void;

  classes: IFormClasses;
  referenceTexts?: IReferenceTextProps[];
  extraButton?: IButton;
}

export const formatIputs = (
  values: any[], // tecnical debt
  classes: IFormClasses,
  setValues: (values: any[]) => void, // tecnical debt
  inputData: IInput
) => {
  const condition = (data: any) => inputData == data; // tecnical debt
  type referenceTextsKey = keyof typeof inputData.referenceTexts;
  if (!values.find(condition)) {
    values.push(inputData);
  }
  const valueIndex = values.findIndex(condition);
  inputData = {
    ...inputData,
    referenceTexts:
      inputData.referenceTexts &&
      values[valueIndex].referenceTexts.map(
        (referenceText: IReferenceTextProps) => {
          return {
            ...referenceText,
            stateClassName:
              classes.referenceText[referenceText.state as referenceTextsKey],
          };
        }
      ),
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const newValue = event.target.value;
      const state = validateInput({ newValue, type: values[valueIndex].type });
      values[valueIndex].value =
        state == "success" ? newValue : values[valueIndex].value;
      setValues(values);
    },
  };
  return customInput(inputData);
};
export interface IValidateInputData {
  newValue: any; // tecnical debt
  type: string;
}

export const inputValidations = {
  text: ({ newValue }: IValidateInputData) => {
    const stringValue = newValue as String;
    let match = new RegExp("[a-z0-9]");
    console.log(stringValue.match(match));
  },
  number: (data: IValidateInputData) => {},
  password: (data: IValidateInputData) => {},
  select: (data: IValidateInputData) => {},
};

const validateInput = ({}: IValidateInputData): TReferState => {
  return "success";
};

export const CustomForm = ({
  inputs,
  values,
  button,
  referenceTexts,
  extraButton,
  classes,
  setValues,
  onSubmit,
}: CustomFormProps) => {
  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <article className={classes.inputsContainer}>
        {inputs.map((inputData) =>
          formatIputs(values, classes, setValues, inputData)
        )}
        {referenceTexts &&
          referenceTexts.map((referenceTexts: IReferenceTextProps, key) => (
            <ReferenceText key={key} {...referenceTexts} />
          ))}
      </article>
      <article className={classes.buttonsContainer}>
        {extraButton && Button(extraButton)}
        {Button(button)}
      </article>
    </form>
  );
};
