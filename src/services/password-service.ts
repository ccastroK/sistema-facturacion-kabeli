import { HTTP_METHODS } from "next/dist/server/web/http";
import { Fetcher } from "./fetcher-service";
import { ICredentials, IRecoveryPassword } from "@/interfaces/auth/auth.interface";

export async function RecoveryPassword({ id, newPassword }: ICredentials):Promise<boolean> {
  try {
    const body = JSON.stringify({id:id,password:newPassword});
    const url = 'http://localhost:4000/auth/recovery'
    const response = await Fetcher<IRecoveryPassword>(body,url,HTTP_METHODS[6],'appJson');
    const condition = response.status === 200 
    return condition
  } catch (error) {
    throw error;
  }
}
