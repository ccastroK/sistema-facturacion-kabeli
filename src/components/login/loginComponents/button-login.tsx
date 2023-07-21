import { IButtonProps } from "@/domain/interfaces/components/login.interface";

// CRW probar eliminarlo sino usar el botón genérico
export const ButtonLoggin = ({ classname, name, nameA }: IButtonProps) => {
  return (
    <section className={classname}>
      <button type="submit">{name}</button>
      <a>{nameA}</a>
    </section>
  );
};
