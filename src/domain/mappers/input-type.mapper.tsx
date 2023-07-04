import { InputText } from "@/components/shared/forms/inputs/input-text";
import { IInput } from "../interfaces/components/form.interface";
import { InputNumber } from "@/components/shared/forms/inputs/input-number";
import { InputSelect } from "@/components/shared/forms/inputs/input-select";

export const inputType = {
  text: (inputProps: IInput) => InputText(inputProps),
  number: (inputProps: IInput) => InputNumber(inputProps),
  password: (inputProps: IInput) => InputText(inputProps),
  select: (inputProps: IInput) => InputSelect(inputProps),
};
