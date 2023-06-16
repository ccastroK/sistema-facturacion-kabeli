import { Logo } from "@/components/shared/Logo";
import styles from "./create-password.module.css";
import { FormEvent, useState } from "react";
import { Welcome } from "@/components/login/loginComponents/Welcome";
import { CustomForm } from "@/components/shared/forms/custom-form";
import { CreatePasswordMock } from "../mocks-create-password.ts/create-password";
import { CustomList } from "@/components/shared/custom-list";
import { list } from "../mocks-create-password.ts/create-password";
import { useRouter } from "next/navigation";
import { RecoveryPassword } from "@/services/password-service";

interface ICreatePasswordProps {
  id: string;
}

export const CreatePassword = ({ id }: ICreatePasswordProps) => {
  const router = useRouter();
  const [password, setPassword] = useState<any[]>([]);//tecnical debt
  const setNewPassword = (newDataPassword: any[]) => {//tecnical debt
    setPassword([...newDataPassword]);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    router.prefetch('/password-successfull')
    const newPassword = password[1].value as string;
    const result = await RecoveryPassword( {id, newPassword} );
    result ? router.push('/password-successfull') : router.refresh()
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
        button={{
          name: "Crear Contraseña",
          type: "submit"
        }}
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
