import { InputText } from "@/components/shared/forms/inputs/input-text";
import { InputNumber } from "@/components/shared/forms/inputs/input-number";
import { InputSelect } from "@/components/shared/forms/inputs/input-select";
import { IInput } from "@/domain/interfaces/components/form.interface";
import { InputPassword } from "@/components/shared/forms/inputs/input-password";


export const inputType = {
  text: (inputProps: IInput) => InputText(inputProps),
  number: (inputProps: IInput) => InputNumber(inputProps),
  password: (inputProps: IInput) => InputPassword(inputProps),
  select: (inputProps: IInput) => InputSelect(inputProps),
  email: (inputProps: IInput) => InputText(inputProps),
};
