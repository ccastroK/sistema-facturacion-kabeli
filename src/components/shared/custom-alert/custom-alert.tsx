import { ICustomAlert } from "@/Domain/interfaces/components/global-components.interface";
import { FaIcon } from "../icons/fa-icons";
import style from "./custom-alert-style.module.css";
import {
  iconOptions,
  styleOptions,
} from "@/Domain/constants/custom-alert.constants";
// CRW ta bonito
export const CustomAlert = ({ message, type, onClick }: ICustomAlert) => {
  return (
    <main className={`${style.alert}  ${styleOptions[type]}`}>
      <section>
        <FaIcon icon={iconOptions[type]} />
        <h6>{message}</h6>
      </section>
      <section>
        <FaIcon onClick={onClick} icon="faXmark" />
      </section>
    </main>
  );
};
