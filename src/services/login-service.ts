import { IUserLoged } from "@/interfaces/user-loged.interface";
import { HTTP_METHODS } from "next/dist/server/web/http";

type Credentials = {
  email:string;
  password:string;
}
export async function LogIn({ email, password }:Credentials): Promise<IUserLoged> {
  try {
    const respone = await fetch("http://localhost:3000/auth/login", {
      method: HTTP_METHODS[3],
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const userLoged: IUserLoged = await respone.json();
    return userLoged;
  } catch (error) {
    throw error;
  }
}
