"use client";
import { useState } from "react";
import { Title } from "../shared/Title";
import { CustomAlert } from "../shared/custom-alert/custom-alert";
import { CustomContainer } from "../shared/custom-cotainer/custom-container";
import styles from "./FormStyle.module.css";
import { FormSocio } from "./form-socio";

export const CreateSocio = () => {
  const [alertState, setAlertState] = useState(true);

  const handleState = () => {
    setAlertState(!alertState);
  };

  // CRW añadir mensaje a constantes
  return (
    <>
      <Title classname={styles.title} title={"Socios / Nuevo Socio"}></Title>
      {alertState ? (
        <CustomAlert
          onClick={handleState}
          type="info"
          message="Al momento de crear un nuevo socio se le enviará un link de acceso."
        />
      ) : null}
      <CustomContainer>
        <h5>Datos</h5>
        <FormSocio />
      </CustomContainer>
    </>
  );
};
