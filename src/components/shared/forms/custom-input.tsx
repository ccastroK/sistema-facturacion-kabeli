import { IInput } from "@/Domain/interfaces/components/form.interface";
import { ObjectKey } from "@/Domain/type/input-type";
import { inputType } from "@/Domain/mappers/input-type.mapper";

export const customInput = (inputProps: IInput) => (
  <section className={inputProps.classname} key={inputProps.id}>
    <h6>{inputProps.label}</h6>
    {inputType[inputProps.type as ObjectKey](inputProps)}
  </section>
);
