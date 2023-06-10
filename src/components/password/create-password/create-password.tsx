import { Logo } from "@/components/shared/Logo";
import styles from "./create-password.module.css";
import { FormEvent, useState } from "react";
import { Welcome } from "@/components/login/loginComponents/Welcome";
import { CustomForm } from "@/components/shared/forms/custom-form";
import { CreatePasswordMock } from "../mocks-create-password.ts/create-password";
import { CustomList } from "@/components/shared/custom-list";
import { list } from "../mocks-create-password.ts/create-password";
import { useRouter } from "next/navigation";

export const CreatePassword = () => {
  const router = useRouter();
  const [password, setPassword] = useState<any[]>([]);
  const setNewPassword = (newDataPassword: any[]) => {
    setPassword([...newDataPassword]);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className={styles.container}>
      <Logo alt="Logo Factify" src="/factfy.png" onClick={() => {}} />
      <Welcome
        subtitle="Ingresa los siguientes datos para crear tu contraseña"
        title="Crea tu contraseña"
        className={styles.welcome}
      />
      <CustomForm
        inputs={CreatePasswordMock}
        onSubmit={handleSubmit}
        setValues={setNewPassword}
        values={password}
        button={{ name: "Crear Contraseña", type: "submit",onClick: () => router.push("/3"), }}
        extraButton={{
          name: "salir",
          type: "button",
          onClick: () => router.push("/login"),
        }}
      />
      <CustomList
        className={styles.sectionList}
        title="La contraseña debe contar con al menos"
        item={list}
      />
    </main>
  );
};
