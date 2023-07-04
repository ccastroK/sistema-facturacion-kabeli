"use client";
import { Title } from "@/components/shared/Title";
import styles from "../LoginStyle.module.css";
import { Welcome } from "../loginComponents/Welcome";
import { FormEvent, useState, ChangeEvent } from "react";
import { signIn } from "next-auth/react";
import { CustomForm } from "@/components/shared/forms/custom-form";
import { loginFormMock } from "../mocks-login/login";
import { findIndexForm } from "@/components/shared/utils/forms";

export const LogInView = () => {
  const [dataLogin, setDataLogin] = useState<any[]>([]); // tecnical debt
  const setNewDataLogin = (newDataLogin: any[]) => {
    // tecnical debt
    setDataLogin([...newDataLogin]);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    signIn("credentials", {
      email: findIndexForm("email", dataLogin),
      password: findIndexForm("password", dataLogin),
      callbackUrl: "/",
    });
  };

  return (
    <>
      <main className={styles.container}>
        <Title title="Factify" classname={styles.logo} />
        <Welcome
          subtitle="Ingresa con tu cuenta Kabeli"
          title="Te damos la bienvenida"
          className={styles.welcome}
        />
        <h6>Digamos que existe el boton de google</h6>
        <CustomForm
          classes={{
            form: styles.formDouble,
            inputsContainer: styles.inputsContainer,
            buttonsContainer: styles.buttonsContainer,
            referenceText: {
              success: styles.referenceSuccess,
              info: styles.referenceInfo,
              error: styles.referenceError,
              warning: styles.referenceWarning,
              none: "",
            },
          }}
          inputs={loginFormMock}
          values={dataLogin}
          setValues={setNewDataLogin}
          button={{ name: "Iniciar Sesión", type: "submit" }}
          onSubmit={handleSubmit}
        />
        <a>Soy un A</a>
      </main>
    </>
  );
};
