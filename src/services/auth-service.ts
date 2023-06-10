import { IUserLoged } from "@/interfaces/user-loged.interface";
import { Fetcher } from "./fetcher-service";
import { HTTP_METHODS } from "next/dist/server/web/http";
import { JWT } from "next-auth/jwt";
import { Account, Profile, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";

const authorize = async (
  credentials: Record<"email" | "password", string> | undefined
): Promise<IUserLoged | null> => {
  const url = "http://localhost:4000/auth/login";
  const body = JSON.stringify(credentials);

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
interface IJwt {
  token: JWT;
  user: User | AdapterUser;
  account: Account | null;
  profile?: Profile | undefined;
  trigger?: "signIn" | "signUp" | "update" | undefined;
  isNewUser?: boolean | undefined;
  session?: any;
}

const loginProviders = {
  google: async ({ email }: ILoginProviders): Promise<IUserLoged> => {
    console.log(email);
    const dbUser = await authorize({ email: email } as Record<
      "email" | "password",
      string
    >);
    return dbUser as IUserLoged;
  },
  credentials: ({ user }: ILoginProviders): IUserLoged => user as IUserLoged,
};

interface ILoginProviders {
  email?: string | null | undefined;
  user?: User | AdapterUser;
}

type loginProvierKey = keyof typeof loginProviders;

const jwt = async ({ account, user, token }: IJwt) => {
  let cookie: JWT | IUserLoged = token;
  // if (account?.provider === "google") {
  //   const dbUser = await authorize({ email: user.email } as Record<
  //     "email" | "password",
  //     string
  //   >);
  //   cookie = dbUser as IUserLoged;
  // } else if (account?.provider === "credentials") {
  //   cookie = user as IUserLoged;
  // }
  cookie = account?.provider
    ? await loginProviders[account.provider as loginProvierKey]({
        email: user?.email,
        user: user as IUserLoged,
      })
    : cookie;

  return cookie;
};

export { authorize, session, jwt };
