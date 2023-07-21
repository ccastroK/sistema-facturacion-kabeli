import { IInput, IReferenceTextProps } from "@/domain/interfaces/components/form.interface";
import { ReferenceText } from "./reference-text";
import { inputType } from "@/Domain/mappers/input-type.mapper";
import { ObjectKey } from "@/Domain/type/input-type";

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
