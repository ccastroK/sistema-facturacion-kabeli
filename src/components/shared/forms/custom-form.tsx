import { Button } from "../buttons/Button";
import {
  IReferenceTextProps,
  ReferenceText,
  TReferState,
} from "./reference-text";
import { ChangeEvent, FormEvent } from "react";
import { customInput } from "./custom-input";
import { IButton } from "@/domain/interfaces/components/global-components.interface";
import { IInput } from "@/domain/interfaces/components/form.interface";

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

export function formatIputs(
  values: IInput[],
  classes: IFormClasses,
  setValues: (values: IInput[]) => void,
  inputData: IInput
) {
  const condition = (data: IInput) => inputData == data;
  if (!values.find(condition)) {
    values.push(inputData);
  }
  const valueIndex = values.findIndex(condition);
  type referenceTextsKey = keyof typeof classes.referenceText;
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
      const newValue = event.currentTarget.value;
      const state = validateInput({ newValue, type: values[valueIndex].type });
      values[valueIndex].className =
        classes.referenceText[state as referenceTextsKey];
      values[valueIndex].value = newValue;
      setValues(values);
    },
  };
  return customInput(inputData);
}
export interface IValidateInputData {
  newValue: string;
  type?: string;
}

export const inputValidations = {
  text: ({ newValue }: IValidateInputData): TReferState => {
    if (typeof newValue != "string") return "error";
    const stringValue = newValue as string;
    if (stringValue.trim().length === 0) return "none";
    let match = new RegExp("[^A-Za-z 0-9]");
    return !match.test(stringValue) ? "success" : "error";
  },
  number: ({ newValue }: IValidateInputData): TReferState => {
    if (typeof newValue != "number") return "error";
    const numberValue = newValue as number;
    return numberValue > 0 ? "success" : "none";
  },
  password: (data: IValidateInputData): TReferState => {
    return "none"; // tecnical debt add new password validation
  },
  select: ({ newValue }: IValidateInputData): TReferState => {
    return newValue === undefined ? "error" : "none";
  },
};

type inputValidationsKey = keyof typeof inputValidations;

const validateInput = ({ newValue, type }: IValidateInputData): TReferState => {
  return inputValidations[type as inputValidationsKey]({ newValue });
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
