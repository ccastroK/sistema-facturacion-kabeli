"use client";
import styles from "./FormStyle.module.css";
import { FormSocio } from "./form-socio";
import { Title } from "@/components/shared/title";

export const CreateSocio = () => {
  return (
    <>
      <Title classname={styles.title} title={"Socios / Nuevo Socio"}></Title>
      <h5>Datos</h5>
      <FormSocio />
    </>
  );
};
export { FormSocio };
