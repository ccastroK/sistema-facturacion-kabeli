import { CustomForm } from "@/components/shared/forms/custom-form";
import { formSocioMock } from "../mocks-form/formSocioMock";
import { FormEvent, useState } from "react";

export const FormSocio = () => {
  const [dataSocios, setDataSocios] = useState<any[]>([]);
  const setNewDataSocios = (newDataSocio: any[]) => {
    setDataSocios([...newDataSocio]);
  };

  const handleSubmit = (e: FormEvent) => {
  };

  return (
    <CustomForm
      inputs={formSocioMock}
      values={dataSocios}
      setValues={setNewDataSocios}
      onSubmit={handleSubmit}
      button={{ name: "Crear nuevo socio", type: "submit" }}
      extraButton={{ name: "Volver", type: "button" }}
    />
  );
};
