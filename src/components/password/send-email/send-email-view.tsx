import styles from "./send-email.module.css";
import { FormEvent, useState } from "react";
import { Welcome } from "../../login/loginComponents/Welcome";
import { Logo } from "../../shared/Logo";
import { CustomForm } from "../../shared/forms/custom-form";
import { sendEmailMock } from "../mocks-create-password.ts/create-password";
import { useRouter } from "next/navigation";

export const SendEmailView = () => {
  const router = useRouter();
  const [email, setEmail] = useState<any[]>([]);
  const setNewEmail = (newDataPassword: any[]) => {
    setEmail([...newDataPassword]);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };


  return (
    <main className={styles.container}>
      <Logo alt="Logo Factify" src="/factfy.png" onClick={() => {}} />
      <Welcome
        subtitle="Ingresa tu correo electrónico y te enviaremos el enlace para crear tu nueva contraseña"
        title="Crear mi contraseña"
        className={styles.welcome}
      />
      <CustomForm
        inputs={sendEmailMock}
        onSubmit={handleSubmit}
        setValues={setNewEmail}
        values={email}
        button={{ name: "Enviar enlace", type: "submit", onClick : ()=>  router.push("/2") }}
        extraButton={{ name: "salir", type: "button", onClick : ()=>  router.push("/login")} }
      />
    </main>
  );
};
