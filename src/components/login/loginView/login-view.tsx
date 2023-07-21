"use client";
import styles from "../login-style.module.css";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { CustomForm } from "@/components/shared/forms/custom-form";
import { loginFormMock } from "../mocks-login/login";
import { findIndexForm } from "@/Application/shared/utils/forms";
import { CustomSeparator } from "@/components/shared/custom-separator/custom-separator";
import { CheckPassword } from "../../../Application/auth/auth-service";
import { useRouter } from "next/navigation";
import { Button } from "@/components/shared/buttons/Button";
import { A } from "@/components/shared/A";
import { Logo } from "@/components/shared/logo";
import { Welcome } from "../loginComponents/welcome";
import { defaultClasses } from "@/components/forms-views/form-socio";
import { handleSubmit } from "@/Application/send-email";

export const LogInView = () => {
  const router = useRouter();
  // CRW quitar los any
  const [dataLogin, setDataLogin] = useState<any[]>([]);
  const setNewDataLogin = (newDataLogin: any[]) => {
    setDataLogin([...newDataLogin]);
  };

  // CRW mandar a un servicio
  const handleGoogle = () => {
    signIn("google", { callbackUrl: "/" });
  };
  // CRW  PONER CONSTANTES <3
  return (
    <>
      <main className={styles.container}>
        <Logo alt="Logo Factify" src="/slykash.png" onClick={() => {}} />
        <Welcome
          subtitle="Ingresa con tu cuenta Kabeli"
          title="Te damos la bienvenida"
          className={styles.welcome}
        />
        <Button
          name="Iniciar sesión con Google"
          type="submit"
          onClick={handleGoogle}
          icon="faGoogle"
        />
        <CustomSeparator />
        <CustomForm
          classes={defaultClasses}
          inputs={loginFormMock}
          values={dataLogin}
          setValues={setNewDataLogin}
          button={{
            name: "Iniciar Sesión",
            type: "submit",
            className: styles.enabled,
          }}
          onSubmit={(e) => handleSubmit(e, router, dataLogin)}
        />
        <A name="¿No tienes tu contraseña?" url="/send-email/forgot" />
      </main>
    </>
  );
};
