"use client";
import { Title } from "@/components/shared/Title";
import styles from "../LoginStyle.module.css";
import { Welcome } from "../loginComponents/Welcome";
import { InputText } from "@/components/forms/inputs/inputText";
import { FormEvent, useState, ChangeEvent } from "react";
import { signIn } from "next-auth/react";
import { ButtonLoggin } from "../loginComponents/ButtonLogin";
import { CustomForm } from "@/components/shared/forms/custom-form";
import { loginFormMock } from "../mocks-login/login";
import { findIndexForm } from "@/components/shared/utils/forms";

export const LogInView = () => {
  const [dataLogin, setDataLogin] = useState<any[]>([]);
  const setNewDataLogin = (newDataLogin: any[]) => {
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
