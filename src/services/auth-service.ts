import { IUserLoged } from "@/interfaces/user-loged.interface";
import { LogIn } from "./login-service";
import { Fetcher } from "./fetcher-service";
import { HTTP_METHODS } from "next/dist/server/web/http";


const authorize = async (credentials: any) => {

  // const user: IUserLoged = await LogIn(credentials);
  const url = 'http://localhost:4000/auth/login';
  const body = JSON.stringify(credentials);
  const header = {"Content-Type": "application/json"}

  const user:IUserLoged = await Fetcher<IUserLoged>(body,url,HTTP_METHODS[3],"appJson");

  const userString = JSON.stringify(user.data);

  if (user.status == 200) {
    return {
      id: user.data.personId.toString(),
      token: user.token,
      user: userString,
    };
  }
  return null;
};

const session = ({ session, token }: any) => {
  return {
    ...session,
    user: {
      ...session.user,
      idPerson: token.idPerson,
      user: token.user,
      token: token.token,
    },
  };
};

const jwt = ({ token, user }: any) => {
  if (user) {
    const u = user as unknown as any;
    return {
      ...token,
      user: u.user,
      idPerson: u.id,
      token: u.token,
    };
  }
  return token;
};

export {authorize,session,jwt}