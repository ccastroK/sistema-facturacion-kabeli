"use client";
import styles from "./FormStyle.module.css";
import { CustomForm } from "@/components/shared/forms/custom-form";
import { formSocioMock } from "./mocks-form/formSocioMock";
import { FormEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { IInput } from "@/Domain/interfaces/components/form.interface";
import { IPartnerDto } from '../../Domain/interfaces/partner/partner.interface';
import { IPerson } from "@/Domain/interfaces/person/person.interface";
import { CreatePartner } from "@/Application/partner-service";
import { useRouter } from "next/navigation";


export const defaultClasses = {
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
};

export const FormSocio = () => {
  const [dataSocios, setDataSocios] = useState<IInput[]>([]);
  const router = useRouter();

  const { data: session } = useSession();
  const userLogeg = session?.user as IPerson;
  

  const setNewDataSocios = (newDataSocio: IInput[]) => {
    setDataSocios([...newDataSocio]);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newPartner : IPartnerDto = {
      name: dataSocios[0].value,
      personalMail: dataSocios[1].value,
      administrativeMail: dataSocios[2].value ,
      phone: dataSocios[3].value,
      commune: dataSocios[4].value,
      address: dataSocios[5].value,
      birthdayDate: dataSocios[6].value,
      position: "Gerente",
      idAdmin: userLogeg.personId
    };
    const result = await CreatePartner(newPartner);
    result ? router.push('/socios') : null;
  };

  return (
    <CustomForm
      classes={defaultClasses}
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
