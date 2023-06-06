import { PAGES, SESSION } from "@/domain/constants/auth";
import { authorize, jwt, session } from "@/services/auth-service";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions: NextAuthOptions = {
  session: SESSION,
  pages: PAGES,
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize,
    }),
  ],
  callbacks: {
    session,
    jwt,
  },
};
