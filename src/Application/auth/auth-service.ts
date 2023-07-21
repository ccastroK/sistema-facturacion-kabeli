import { Fetcher } from "../fetcher-service";
import { HTTP_METHODS } from "next/dist/server/web/http";
import { JWT } from "next-auth/jwt";
import { RequestInternal } from "next-auth";
import { ICheck, IJwt, IUserLoged } from "@/Domain/interfaces/auth/auth.interface";
import { loginProvierKey } from "@/domain/type/login-provier.type";
import { loginProviders } from "@/Domain/mappers/login-provider.mapper";
const authorize = async (
  credentials: Record<"email" | "password", string> | undefined,
  req?: Pick<RequestInternal, "headers" | "body" | "query" | "method">, // CRW  quitar el req poner _
  provider: string = "credentials"
): Promise<IUserLoged | null> => {
  const url = "http://localhost:4000/auth/login"; // CRW convertir en una constante global el servidor (en el .env)
  const body = JSON.stringify({ ...credentials, provider: provider });
  let result: IUserLoged | null = null;
  const response: IUserLoged = await Fetcher<IUserLoged>(
    url,
    HTTP_METHODS[3],
    "appJson",
    body
  );
  result = response.status === 200 ? response : null;
  return result;
};

export const CheckPassword = async (email: string): Promise<boolean> => {
  try {
    const url = `http://localhost:4000/auth/check/${email}`; // CRW .env
    const response = await fetch(url, { method: HTTP_METHODS[0] });
    const responseJson: ICheck = await response.json();
    return responseJson.data;
  } catch (error) {
    throw error
  }
}
const session = ({ token, session }: any) => {
  token as IUserLoged;
  return {
    ...session,
    user: token.data,
    token: token.token,
  };
};

const jwt = async ({ account, user, token }: IJwt) => {
  let cookie: JWT | IUserLoged = token;
  cookie = account?.provider
    ? await loginProviders[account.provider as loginProvierKey]({
      email: user?.email,
      user: user as IUserLoged,
    })
    : cookie;

  return cookie;
};

export { authorize, session, jwt };
