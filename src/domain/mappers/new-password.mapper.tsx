import { Welcome } from "@/components/login/loginComponents/welcome";
import { CreatePasswordMock, list } from "@/components/password/mocks-create-password/create-password";
import { NewPasswordForm } from "@/components/password/new-password-form/new-password-form";
import { Logo } from "@/components/shared/logo";
import { CustomList } from "@/components/shared/custom-list";
import { CustomForm } from "@/components/shared/forms/custom-form";
import styles from '@/components/shared/message/password-successful.module.css';
import { INewPasswordForm } from "../interfaces/components/new-password.interface";
import { ViewMessage } from "@/components/shared/message/view-message";
import { FaIcon} from "@/components/shared/icons/fa-icons";
import { defaultClasses } from "@/components/forms-views/form-socio";
import { Title } from "@/components/shared/Title";
import { Button } from "@/components/shared/buttons/Button";

export const newPasswordForm = {
  create: ({
    handleSubmit,
    password,
    router,
    setNewPassword,
  }: INewPasswordForm) => {
    return (
      <NewPasswordForm
        Welcome={
          <Welcome
            subtitle="Ingresa los siguientes datos para crear tu contraseña"
            title="Crea tu contraseña"
            className={styles.welcome}
          />
        }
        Logo={<Logo alt="Logo Factify" src="/slykash.png" onClick={() => {}} />}
        CustomForm={
          <CustomForm
            inputs={CreatePasswordMock}
            onSubmit={handleSubmit}
            setValues={setNewPassword}
            values={password}
            button={{
              name: "Crear Contraseña",
              type: "submit",
            }}
            extraButton={{
              name: "salir",
              type: "button",
              onClick: () => router.push("/login"),
            }}
            classes={defaultClasses}
          />
        }
        CustomList={
          <CustomList
            className={styles.sectionList}
            title="La contraseña debe contar con al menos"
            item={list}
          />
        }
      />
    );
  },
  forgot: ({
    handleSubmit,
    password,
    router,
    setNewPassword,
  }: INewPasswordForm) => {
    return (
      <NewPasswordForm
        Welcome={
          <Welcome
            subtitle="Ingresa los siguientes datos para crear tu contraseña"
            title="Cambia tu contraseña"
            className={styles.welcome}
          />
        }
        Logo={<Logo alt="Logo Factify" src="/slykash.png" onClick={() => {}} />}
        CustomForm={
          <CustomForm
            inputs={CreatePasswordMock}
            onSubmit={handleSubmit}
            setValues={setNewPassword}
            values={password}
            button={{
              name: "Crear Contraseña",
              type: "submit",
            }}
            extraButton={{
              name: "salir",
              type: "button",
              onClick: () => router.push("/login"),
            }}
            classes={defaultClasses}
          />
        }
        CustomList={
          <CustomList
            className={styles.sectionList}
            title="La contraseña debe contar con al menos"
            item={list}
          />
        }
      />
    );
  },
  successful: ({ router }: INewPasswordForm) => {
    return (
      <ViewMessage
        Logo={<Logo alt="Logo Factify" src="/slykash.png" onClick={() => {}} />}
        Title={<Title title="Excelente !!!" />}
        faIcon={<FaIcon icon="faCircleCheck" />}
        text="Haz creado tu contraseña con éxito, ahora puedes ingresar a Factfy"
        Button={
          <Button
            name="Ir a Login"
            type="button"
            onClick={() => router.push("/login")}
          />
        }
        classname={styles.container}
      />
    );
  },
  error: ({ router }: INewPasswordForm) => {
    return (
      <ViewMessage
        Logo={<Logo alt="Logo Factify" src="/slykash.png" onClick={() => {}} />}
        Title={<Title title="Error !!!" />}
        faIcon={<FaIcon icon="faCircleXmark" />}
        text="Hubo un error al momento de crear tu contraseña, por favor vuelve a intertarlo"
        Button={
          <Button
            name="Ir al Login"
            type="button"
            onClick={() => router.push("/login")}
          />
        }
        classname={styles.containerError}
      />
    );
  },
};
