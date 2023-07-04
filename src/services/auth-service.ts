import { IUserLoged } from "@/interfaces/user-loged.interface";
import { LogIn } from "./login-service";


const authorize = async (credentials: any) => {  // tecnical debt
  const user: IUserLoged = await LogIn(credentials);

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

const session = ({ session, token }: any) => {  // tecnical debt
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

const jwt = ({ token, user }: any) => {  // tecnical debt
  if (user) {
    const u = user as unknown as any;  // tecnical debt
    return {
      ...token,
      user: u.user,
      idPerson: u.id,
      token: u.token,
    };
  }
  return token;
};

export { authorize, session, jwt }