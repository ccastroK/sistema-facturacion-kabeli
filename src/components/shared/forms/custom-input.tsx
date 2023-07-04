import { IInput } from "../interfaces/forms/inputs/input-interface";
import { InputNumber } from "./inputs/input-number";
import { InputSelect } from "./inputs/input-select";
import { InputText } from "./inputs/input-text";
import { IReferenceTextProps, ReferenceText } from "./reference-text";

const inputType = {
  text: (inputProps: IInput) => InputText(inputProps),
  number: (inputProps: IInput) => InputNumber(inputProps),
  password: (inputProps: IInput) => InputText(inputProps),
  select: (inputProps: IInput) => InputSelect(inputProps),
};

type ObjectKey = keyof typeof inputType;

export const customInput = (inputProps: IInput) => {
  const { className, label, referenceTexts } = inputProps;
  return (
    <article className={className} key={inputProps.id}>
      <h6>{label}</h6>
      <section>{inputType[inputProps.type as ObjectKey](inputProps)}</section>
      <section>
        {referenceTexts &&
          referenceTexts.map((referenceTexts: IReferenceTextProps, key) => (
            <ReferenceText key={key} {...referenceTexts} />
          ))}
      </section>
    </article>
  );
};
