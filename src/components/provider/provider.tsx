"use client";

import { INextAuthProps } from "@/interfaces/auth/auth.interface";
import { SessionProvider } from "next-auth/react";

export const NextAuthProvider = ({ children }: INextAuthProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
