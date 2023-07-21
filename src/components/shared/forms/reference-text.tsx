import { IReferenceTextProps } from "@/domain/interfaces/components/form.interface";
import { FaIcon } from "../icons/fa-icons";

export const ReferenceText = ({
  stateClassName,
  text,
  icon,
}: IReferenceTextProps) => (
  <article className={stateClassName}>
    <section>{text}</section>
    {icon && <FaIcon icon={icon} />}
  </article>
);
