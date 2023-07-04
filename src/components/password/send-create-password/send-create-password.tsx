import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { sendCreatePasswordEmail, sendRecoveryPasswordEmail } from "@/Application/send-email";
import { ISendCreateProps } from "@/Domain/interfaces/components/send-email.interface";
import { sendEmailFormKey } from "@/Domain/type/send-email.type";
import { sendEmailForm } from "@/Domain/mappers/send-email.mapper";

export const SendCreatePassword = ({ type }: ISendCreateProps) => {
  const router = useRouter();
  const [body, setBody] = useState<string>(type);
  const [email, setEmail] = useState<any[]>([]);
  const setNewEmail = (newDataPassword: any[]) => {
    setEmail([...newDataPassword]);
  };
  const handleSubmitCreate = async (e: FormEvent) => {
    e.preventDefault();
    const sendEmail = email[0].value;
    const result = await sendCreatePasswordEmail({ sendEmail: sendEmail });
    result.data ? setBody('successfull') : setBody('error');
  };
  const handleSubmitForgot = async (e: FormEvent) => {
    e.preventDefault();
    const sendEmail = email[0].value;
    const result = await sendRecoveryPasswordEmail({ sendEmail: sendEmail });
    result.data ? setBody('successfull') : setBody('error');
  };

  return sendEmailForm[body as sendEmailFormKey]({
    email: email,
    handleSubmitCreate: handleSubmitCreate,
    handleSubmitForgot: handleSubmitForgot,
    router: router,
    setNewEmail: setNewEmail,
  });
};
