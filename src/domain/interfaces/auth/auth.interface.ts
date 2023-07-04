import { Account, Profile, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import { IPerson } from "../person/person.interface";
export interface IJwt {
  token: JWT;
  user: User | AdapterUser;
  account: Account | null;
  profile?: Profile | undefined;
  trigger?: "signIn" | "signUp" | "update" | undefined;
  isNewUser?: boolean | undefined;
  session?: any;
}

export interface ILoginProviders {
  email?: string | null | undefined;
  user?: User | AdapterUser;
}
export interface ICredentials {
  token: string;
  newPassword: string;
}
export interface IRecoveryPassword {
  date: Date;
  status: number;
  message: string;
  data: string;
} 

export interface IUserLoged extends User,JWT {
  date: Date;
  status: number;
  message: string;
  data?: IPerson;
  token: string;
}

export interface INextAuthProps {
  children?: React.ReactNode;
};

export interface ICheck {
  date:string,
  message:string,
  status:number,
  data:boolean
}
export interface ISendEmail {
  date:string,
  message:string,
  status:number,
  data:boolean
}