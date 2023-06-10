"use client";
import styles from "../LoginStyle.module.css";
import { Welcome } from "../loginComponents/Welcome";
import { FormEvent, useState, ChangeEvent } from "react";
import { signIn } from "next-auth/react";
import { CustomForm } from "@/components/shared/forms/custom-form";
import { loginFormMock } from "../mocks-login/login";
import { findIndexForm } from "@/components/shared/utils/forms";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/shared/buttons/Button";
import { A } from "@/components/shared/A";
import { CustomSeparator } from "@/components/shared/custom-separator/custom-separator";

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

  const handleGoogle = () => {
    signIn("google",{callbackUrl:"/"})
  }

  return (
    <>
      <main className={styles.container}>
        <Logo alt="Logo Factify"  src="/factfy.png" onClick={()=>{}}/>
        <Welcome
          subtitle="Ingresa con tu cuenta Kabeli"
          title="Te damos la bienvenida"
          className={styles.welcome}
        />
        <Button name="Iniciar sesión con Google" type="submit" onClick={handleGoogle} icon="faGoogle" />
        <CustomSeparator/>
        <CustomForm
          inputs={loginFormMock}
          values={dataLogin}
          setValues={setNewDataLogin}
          button={{ name: "Iniciar Sesión", type: "submit" }}
          onSubmit={handleSubmit}
        />
        <A name="¿No tienes tu contraseña?" url="/send-email"/>
      </main>
    </>
  );
};
