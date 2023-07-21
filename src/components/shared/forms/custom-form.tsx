import { Button } from "../buttons/Button";
import { ReferenceText } from "./reference-text";
import { ChangeEvent } from "react";
import { customInput } from "./custom-input";
import {
  CustomFormProps,
  IFormClasses,
  IInput,
  IReferenceTextProps,
  IValidateInputData,
} from "@/domain/interfaces/components/form.interface";
import { TReferState, inputValidationsKey } from "@/Domain/type/form-type";
import { inputValidations } from "@/Domain/mappers/custom-form.mapper";

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
