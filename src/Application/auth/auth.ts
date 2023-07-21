import { authorize, jwt, session } from "@/Application/auth/auth-service";
import { PAGES, SESSION } from "@/domain/constants/auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  session: SESSION,
  pages: PAGES,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
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
  secret: process.env.NEXTAUTH_SECRET as string,
  callbacks: {
    session,
    jwt,
  },
};
