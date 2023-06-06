import { CustomForm } from "@/components/shared/forms/custom-form";
import { formSocioMock } from "../mocks-form/formSocioMock";
import { useState } from "react";

export const FormSocio = () => {
  const [dataSocios, setDataSocios] = useState<any[]>([]);
  const setNewDataSocios = (newDataSocio: any[]) => {
    setDataSocios([...newDataSocio]);
  };

  return CustomForm(formSocioMock, dataSocios, setNewDataSocios);
};
