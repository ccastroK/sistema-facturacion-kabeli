import { IInput } from "@/domain/interfaces/components/form.interface";

const findIndexForm = (indexName: string, formData: IInput[]) => {
  return formData[formData.findIndex((value) => value.name == indexName)]
    .value;
};

export { findIndexForm }
