"use client";
import { Title } from "@/components/shared/Title";
import styles from "../LoginStyle.module.css";
import { Welcome } from "../loginComponents/Welcome";
import { InputText } from "@/components/forms/inputs/inputText";
import { Button } from "../../shared/Button";
import { FormEvent, useState, ChangeEvent } from "react";
import { signIn } from "next-auth/react";
import { ButtonLoggin } from "../loginComponents/ButtonLogin";

export const LogInView = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassrod] = useState<string>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(email,password);
    signIn("credentials", {
      email: email,
      password: password,
      callbackUrl:"/"
    });
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setPassrod(e.target.value);
  };
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  return (
    <div>
        <main className={styles.container}>
        <Title title="Factify" classname={styles.logo} />
        <Welcome
          subtitle="Ingresa con tu cuenta Kabeli"
          title="Te damos la bienvenida"
          className={styles.welcome}
        />
        <h6>Digamos que existe el boton de google</h6>
        <form onSubmit={handleSubmit}>
          <InputText
            onChange={handleEmail}
            classname={styles.inpMail}
            nombre="Correo electrónico"
            placeholder=""
            value="email"
          ></InputText>
          <InputText
            onChange={handlePassword}
            classname={styles.inpPass}
            nombre="Contraseña"
            placeholder="************"
            value="password"
          ></InputText>
          <ButtonLoggin classname={styles.btnSubmit} name="Iniciar Sesión" nameA="¿No tienes tu contraseña?"/>
        </form>
      </main>
    </div>
      
  );
};
