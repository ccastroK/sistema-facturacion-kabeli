"use client";
type InputTextProps = {
  nombre: string;
  placeholder: string;
  classname: string;
  value:string;
};

export const InputText = ({
  nombre,
  placeholder,
  classname,
  value
}: InputTextProps) => {
  return (
    <section className={classname}>
      <h6>{nombre}</h6>
      <input type="text" placeholder={placeholder} value={value} />
    </section>
  );
};
