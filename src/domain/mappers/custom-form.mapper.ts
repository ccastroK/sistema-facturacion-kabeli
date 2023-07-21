import { IValidateInputData } from "@/domain/interfaces/components/form.interface";
import { TReferState } from '../type/form-type';

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
  password: ({newValue}: IValidateInputData): TReferState => {
    if (typeof newValue != "string") return "error";
    const stringValue = newValue as string;
    if (stringValue.trim().length < 8) return "none";
    let match = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,'i');
    return match.test(stringValue) ? "success" : "error";
  },
  select: ({ newValue }: IValidateInputData): TReferState => {
    return newValue === undefined ? "error" : "none";
  },
  email:({ newValue }: IValidateInputData):TReferState =>{
    if (typeof newValue != "string") return "error";
    const stringValue = newValue as string;
    if(stringValue.trim().length ===0) return "none";
    let match = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$",'i');
    return match.test(stringValue) ? "success" : "error";
  }
};
