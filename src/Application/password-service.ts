import { HTTP_METHODS } from "next/dist/server/web/http";
import { Fetcher } from "./fetcher-service";
import {
  ICredentials,
  IRecoveryPassword,
} from "@/Domain/interfaces/auth/auth.interface";



export async function CreatePassword({
  token,
  newPassword,
}: ICredentials): Promise<boolean> {
  try {
    const body = JSON.stringify({ id: token, password: newPassword.newPassword,confirmPassword: newPassword.confirmNewPassword });
    const url = "http://localhost:4000/auth/create";
    const response = await Fetcher<IRecoveryPassword>(
      url,
      HTTP_METHODS[6],
      "appJson",
      body
    );
    const condition = response.status === 200;
    return condition;
  } catch (error) {
    throw error;
  }
}

export async function RecoveryPassword({
  token,
  newPassword,
}: ICredentials): Promise<boolean> {
  try {
    const body = JSON.stringify({ token: token,password: newPassword.newPassword,confirmPassword: newPassword.confirmNewPassword});
    const url = "http://localhost:4000/auth/recovery";
    const response = await Fetcher<IRecoveryPassword>(
      url,
      HTTP_METHODS[6],
      "appJson",
      body
    );
    const condition = response.status === 200;
    return condition;
  } catch (error) {
    throw error;
  }
}
