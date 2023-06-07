import { IInput } from "../interfaces/forms/inputs/input-interface";
import { InputNumber } from "./inputs/input-number";
import { InputSelect } from "./inputs/input-select";
import { InputText } from "./inputs/input-text";

const inputType = {
  text: (inputProps: IInput) => InputText(inputProps),
  number: (inputProps: IInput) => InputNumber(inputProps),
  password: (inputProps: IInput) => InputText(inputProps), //Pendiente crear input de tipo password
  select: (inputProps: IInput) => InputSelect(inputProps),
};

type ObjectKey = keyof typeof inputType;

export const customInput = (inputProps: IInput) => (
  <section className={inputProps.classname} key={inputProps.id}>
    <h6>{inputProps.label}</h6>
    {inputType[inputProps.type as ObjectKey](inputProps)}
  </section>
);
