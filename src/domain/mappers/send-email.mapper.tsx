import styles from "@/components/password/send-email/send-email.module.css";
import messageStyles from "@/components/shared/message/password-successful.module.css";
import { SendEmailView } from "@/components/password/send-email/send-email-view";
import { ISendEmailForm } from "../interfaces/components/send-email.interface";
import { Logo } from "@/components/shared/logo";
import { Welcome } from "@/components/login/loginComponents/welcome";
import { CustomForm } from "@/components/shared/forms/custom-form";
import { FormEvent } from "react";
import { sendEmailMock } from "@/components/password/mocks-create-password/create-password";
import { ViewMessage } from "@/components/shared/message/view-message";
import { Title } from "@/components/shared/title";
import { defaultClasses } from "@/components/forms-views/form-socio";
import { Button } from "@/components/shared/buttons/Button";
import { FaIcon } from "@/components/shared/icons/fa-icons";

export const sendEmailForm = {
    create: ({
      email,
      router,
      setNewEmail,
      handleSubmitCreate,
    }: ISendEmailForm) => {
      return (
        <SendEmailView
          Logo={<Logo alt="Logo Factify" src="/slykash.png" onClick={() => {}} />}
          Welcome={
            <Welcome
              subtitle="Ingresa tu correo electrónico y te enviaremos el enlace para crear tu nueva contraseña"
              title={"Crear mi contraseña"}
              className={styles.welcome}
            />
          }
          CustomForm={
            <CustomForm
              inputs={sendEmailMock}
              onSubmit={handleSubmitCreate as (e: FormEvent) => Promise<void>}
              setValues={setNewEmail}
              values={email}
              button={{ name: "Enviar enlace", type: "submit"}}
              extraButton={{
                name: "salir",
                type: "button",
                onClick: () => router.push("/login"),
              }}
              classes={defaultClasses}
            />
          }
        />
      );
    },
    forgot: ({
      email,
      router,
      setNewEmail,
      handleSubmitForgot,
    }: ISendEmailForm) => {
      return (
        <SendEmailView
          Logo={<Logo alt="Logo Factify" src="/slykash.png" onClick={() => {}} />}
          Welcome={
            <Welcome
              subtitle="Ingresa tu correo electrónico y te enviaremos el enlace para crear tu nueva contraseña"
              title={"Olvidé mi contraseña"}
              className={styles.welcome}
            />
          }
          CustomForm={
            <CustomForm
              inputs={sendEmailMock}
              onSubmit={handleSubmitForgot as (e: FormEvent) => Promise<void>}
              setValues={setNewEmail}
              values={email}
              button={{ name: "Enviar enlace", type: "submit" }}
              extraButton={{
                name: "salir",
                type: "button",
                onClick: () => router.push("/login"),
              }}
              classes={defaultClasses}
            />
          }
        />
      );
    },
    successfull: ({ router }: ISendEmailForm) => {
      return (
        <ViewMessage
          Logo={<Logo alt="Logo Factify" src="/slykash.png" onClick={() => {}} />}
          Title={<Title title="Excelente !!!" />}
          faIcon={<FaIcon icon="faCircleCheck" />}
          text="El correo fue enviado correctamente, por favor revisa la bandeja de entrada de tu correo"
          Button={
            <Button
              name="Ir a Login"
              type="button"
              onClick={() => router.push("/login")}
  
            />
          }
          classname={messageStyles.container}
        />
      );
    },
    error:({router}:ISendEmailForm) => {
      return (
        <ViewMessage
          Logo={<Logo alt="Logo Factify" src="/slykash.png" onClick={() => {}} />}
          Title={<Title title="Error !!!" />}
          faIcon={<FaIcon icon="faCircleXmark" />}
          text="Hubo un error al momento de enviar el correo, por favor vuelve a intertarlo"
          Button={
            <Button
              name="Ir al Login"
              type="button"
              onClick={() => router.back()}
            />
          }
          classname={messageStyles.containerError}
        />
      );
    }
  };