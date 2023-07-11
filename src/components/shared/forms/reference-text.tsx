import { FaIcon } from "../icons/fa-icons";

export interface IReferenceTextProps {
  state: TReferState;
  stateClassName: string;
  text: string;
  icon?: string;
}

export type TReferState = "none" | "success" | "warning" | "info" | "error";
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
