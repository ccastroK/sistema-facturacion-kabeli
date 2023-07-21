import { ITitleProps } from "@/Domain/interfaces/components/global-components.interface";
import { FaIcon } from "./icons/fa-icons";


export const Title = ({ title, classname,icon,onClick }: ITitleProps) => {
  return (
    <>
      <section className={classname}>
        <h1>{title}</h1>
        {icon ? <FaIcon icon={icon} onClick={onClick}/> : null}
      </section>
    </>
  );
};
