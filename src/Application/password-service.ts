import { HTTP_METHODS } from "next/dist/server/web/http";
import { Fetcher } from "./fetcher-service";
import { ICredentials, IRecoveryPassword } from "@/Domain/interfaces/auth/auth.interface";


// CRW homologar nombres de variables
export async function CreatePassword({
  token,
  newPassword,
}: ICredentials): Promise<boolean> {
  try {
    // CRW el mismo nombre que se va a utilizar queda como nombre arriba
    const body = JSON.stringify({ id: token, password: newPassword.newPassword, confirmPassword: newPassword.confirmNewPassword });
    // CRW .env
    const url = "http://localhost:4000/auth/create";
    const response = await Fetcher<IRecoveryPassword>(
      url,
      HTTP_METHODS[6],
      "appJson",  // CRW mandar a constante
      body
    );
    // CRW usar la constante de HTTP status code
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
    // CRW pasar solo como token 
    const body = JSON.stringify({ token: token, password: newPassword.newPassword, confirmPassword: newPassword.confirmNewPassword });
    // CRW .env
    const url = "http://localhost:4000/auth/recovery";
    const response = await Fetcher<IRecoveryPassword>(
      url,
      HTTP_METHODS[6],
      "appJson",  // CRW mandar a constante
      body
    );
    // CRW usar la constante de HTTP status code
    const condition = response.status === 200;
    return condition;
  } catch (error) {
    throw error;
  }
}
