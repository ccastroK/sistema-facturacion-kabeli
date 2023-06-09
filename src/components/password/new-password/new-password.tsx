import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import {
  CreatePassword,
  RecoveryPassword,
} from "@/Application/password-service";
import { newPasswordFormKey } from "@/domain/type/new-password.type";
import { newPasswordForm } from "@/domain/mappers/new-password.mapper";
import { INewPassowordProp } from "@/domain/interfaces/components/new-password.interface";

export const NewPassword = ({ token, type }: INewPassowordProp) => {
  const router = useRouter();
  const [password, setPassword] = useState<any[]>([]); //tecnical debt
  const setNewPassword = (newDataPassword: any[]) => {
    //tecnical debt
    setPassword([...newDataPassword]);
  };
  const [body, setBody] = useState<string>(type);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newPassword = password[1].value as string;
    const result =
      type === "create"
        ? await CreatePassword({ token: token, newPassword: newPassword })
        : await RecoveryPassword({ token: token, newPassword: newPassword });
    result ? setBody("successful") : setBody("error");
  };

  return newPasswordForm[body as newPasswordFormKey]({
    handleSubmit,
    router,
    password,
    setNewPassword,
  });
};
