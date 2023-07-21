"use client";

import { INextAuthProps } from "@/Domain/interfaces/auth/auth.interface";
import { SessionProvider } from "next-auth/react";

export const NextAuthProvider = ({ children }: INextAuthProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
