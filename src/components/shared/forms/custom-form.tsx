import { ChangeEvent, FormEvent } from "react";
import { customInput } from "./custom-input";
import { IInput } from "../interfaces/forms/inputs/input-interface";
import { Button } from "../buttons/Button";
import { IButton } from "../interfaces/buttons/button-interface";

type CustomFormProps = {
  inputs: any[];
  values: any[];
  setValues: (values: any[]) => void;
  button: IButton;
  onSubmit: (e: FormEvent) => void;
  extraButton?: IButton;
};

const formatIputs = (
  values: any[],
  setValues: (values: any[]) => void,
  inputData: IInput
) => {
  const condition = (data: any) => inputData == data;
  if (!values.find(condition)) {
    values.push(inputData);
  }
  const valueIndex = values.findIndex(condition);
  inputData = {
    ...inputData,
    value: values[valueIndex].value,
    onChange: (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      values[valueIndex].value = newValue;
      setValues(values);
    },
  };
  return customInput(inputData);
};

export const CustomForm = ({
  inputs,
  setValues,
  values,
  button,
  onSubmit,
  extraButton,
}: CustomFormProps) => {
  return (
    <form onSubmit={onSubmit}>
      {inputs.map((inputData) => formatIputs(values, setValues, inputData))}
      <section className="sectionButton">
        {extraButton ? Button(extraButton) : null}
        {Button(button)}
      </section>
    </form>
  );
};
