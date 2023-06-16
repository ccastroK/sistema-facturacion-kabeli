import { Logo } from "@/components/shared/Logo";
import styles from "./password-successful.module.css";
import { Title } from "../../shared/Title";
import { faIcon } from "../../shared/icons/fa-icons";
import { Button } from "../../shared/buttons/Button";
import { useRouter } from "next/navigation";

export const PassWordCreateSuccessful = () => {
  const router = useRouter();
  return (
    <main className={styles.container}>
      <Logo alt="Logo Factify" src="/factfy.png" onClick={() => {}} />
      <Title title="Excelente !!!" />
      {faIcon("faCircleCheck")}
      <p>Haz creado tu contraseña con éxito, ahora puedes ingresar a Factfy</p>
      <Button name="Ir a Login" type="button" onClick={() => router.push('/login')}  />
    </main>
  );
};
