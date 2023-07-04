import { ISendEmailProp } from "@/Domain/interfaces/components/send-email.interface";
import styles from "./send-email.module.css";

export const SendEmailView = ({CustomForm,Logo,Welcome}:ISendEmailProp) => {
  return (
    <main className={styles.container}>
      {Logo}
      {Welcome}
      {CustomForm}
    </main>
  );
};
