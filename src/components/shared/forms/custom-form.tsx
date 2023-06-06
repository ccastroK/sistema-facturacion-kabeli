import { ChangeEvent } from "react";
import { customInput } from "./custom-input";
import { IInput } from "../interfaces/forms/inputs/input-interface";

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

export const CustomForm = (
  inputs: any[],
  values: any[],
  setValues: (values: any[]) => void
) => {
  return (
    <form>
      {inputs.map((inputData) => formatIputs(values, setValues, inputData))}
    </form>
  );
};
