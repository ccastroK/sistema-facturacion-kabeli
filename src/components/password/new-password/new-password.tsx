import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import {
  CreatePassword,
  RecoveryPassword,
} from "@/Application/password-service";
import { INewPassowordProp } from "@/Domain/interfaces/components/new-password.interface";
import { newPasswordFormKey } from "@/Domain/type/new-password.type";
import { newPasswordForm } from "@/Domain/mappers/new-password.mapper";
import { IInput } from "@/domain/interfaces/components/form.interface";


export const NewPassword = ({ token, type }: INewPassowordProp) => {
  const router = useRouter();
  const [password, setPassword] = useState<IInput[]>([]); //tecnical debt
  const setNewPassword = (newDataPassword: IInput[]) => {
    setPassword([...newDataPassword]);
  };
  const [body, setBody] = useState<string>(type);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if(password[0].value != password[1].value) return router.refresh();

    const result =
      type === "create"
        ? await CreatePassword({ token: token, newPassword: {newPassword: password[0].value,confirmNewPassword:password[1].value} })
        : await RecoveryPassword({
          token: token,
          newPassword: {newPassword: password[0].value,confirmNewPassword:password[1].value},
        });
    result ? setBody("successful") : setBody("error");
  };

  return newPasswordForm[body as newPasswordFormKey]({
    handleSubmit,
    router,
    password,
    setNewPassword,
  });
};
