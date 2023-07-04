import { INewPasswordFromProps } from "@/Domain/interfaces/components/new-password.interface";
import styles from "./create-password.module.css";

export const NewPasswordForm = ({CustomForm,Logo,Welcome,CustomList}:INewPasswordFromProps) => {
  return (
    <main className={styles.container}>
      {Logo}
      {Welcome}
      {CustomForm}
      {CustomList}
    </main>
  );
};
