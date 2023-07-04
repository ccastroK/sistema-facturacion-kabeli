import { ITitleProps } from "@/Domain/interfaces/components/global-components.interface";

export const Title = ({ title, classname }: ITitleProps) => {
  return (
    <>
      <h1 className={classname}>{title}</h1>
    </>
  );
};
