import { Fetcher } from "./fetcher-service";
import { HTTP_METHODS } from "next/dist/server/web/http";
import { JWT } from "next-auth/jwt";
import {
  IJwt,
  ILoginProviders,
  IUserLoged,
} from "@/interfaces/auth/auth.interface";
import { RequestInternal } from "next-auth";

const authorize = async (
  credentials: Record<"email" | "password", string> | undefined,
  req?: Pick<RequestInternal, "headers" | "body" | "query" | "method">,
  provider: string = "credentials"
): Promise<IUserLoged | null> => {
  const url = "http://localhost:4000/auth/login";
  const body = JSON.stringify({ ...credentials, provider: provider });
  console.log(body);
  let result: IUserLoged | null = null;

  const response: IUserLoged = await Fetcher<IUserLoged>(
    body,
    url,
    HTTP_METHODS[3],
    "appJson"
  );
  result = response.status === 200 ? response : null;
  return result;
};

const session = ({ token, session }: any) => {
  token as IUserLoged;
  return {
    ...session,
    user: token.data,
    token: token.token,
  };
};

const loginProviders = {
  google: async ({ email }: ILoginProviders): Promise<IUserLoged> => {
    const provider: string = "google";
    const dbUser = await authorize(
      { email: email } as Record<"email" | "password", string>,
      undefined,
      provider
    );
    return dbUser as IUserLoged;
  },
  credentials: ({ user }: ILoginProviders): IUserLoged => user as IUserLoged,
};

type loginProvierKey = keyof typeof loginProviders;

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
