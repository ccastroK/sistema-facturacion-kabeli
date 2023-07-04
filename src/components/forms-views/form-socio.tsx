"use client";
import styles from "./FormStyle.module.css";
import { CustomForm } from "@/components/shared/forms/custom-form";
import { formSocioMock } from "./mocks-form/formSocioMock";
import { FormEvent, useState } from "react";

export const FormSocio = () => {
  const [dataSocios, setDataSocios] = useState<any[]>([]); // tecnical debt
  const setNewDataSocios = (newDataSocio: any[]) => {
    // tecnical debt
    setDataSocios([...newDataSocio]);
  };

  const handleSubmit = (e: FormEvent) => {
    // tecnical debt
    console.log(e);
  };
  return (
    <CustomForm
      classes={{
        form: styles.formDouble,
        inputsContainer: styles.inputsContainer,
        buttonsContainer: styles.buttonsContainer,
        referenceText: {
          success: styles.referenceSuccess,
          info: styles.referenceInfo,
          error: styles.referenceError,
          warning: styles.referenceWarning,
          none: "",
        },
      }}
      inputs={formSocioMock}
      values={dataSocios}
      setValues={setNewDataSocios}
      onSubmit={handleSubmit}
      button={{ name: "Crear nuevo socio", type: "submit" }}
      extraButton={{ name: "Volver", type: "button" }}
      referenceTexts={[
        {
          state: "none",
          stateClassName: styles.referenceInfo,
          text: "esto es un formulario de socios",
          icon: "faInfoCircle",
        },
      ]}
    />
  );
};
