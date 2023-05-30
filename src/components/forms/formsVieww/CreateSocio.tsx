"use client";
import styles from "../FormStyle.module.css";
import { FormSocio } from "../inputs/FormSocio";
import { formSocioMock } from "../mocksForm/formSocioMock";
import { Title } from "@/components/shared/Title";


export const CreateSocio = () => {
  return (
    <>  
        <Title classname={styles.title} title={'Socios / Nuevo Socio'}></Title>
        <h5>Datos</h5>
        <FormSocio classname={styles.inpText}  formMock={formSocioMock}></FormSocio>
    </>
  );
};
export { FormSocio };

