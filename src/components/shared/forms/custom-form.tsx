import { ChangeEvent, FormEvent } from "react";
import { customInput } from "./custom-input";
import { Button } from "../buttons/button";
import { CustomFormProps, IInput } from "@/Domain/interfaces/components/form.interface";


const formatIputs = (
  values: any[],//tecnical debt
  setValues: (values: any[]) => void,//tecnical debt
  inputData: IInput
) => {
  const condition = (data: any) => inputData == data;//tecnical debt
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
