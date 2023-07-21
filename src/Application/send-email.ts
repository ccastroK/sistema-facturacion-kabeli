import { HTTP_METHODS } from "next/dist/server/web/http";
import { Fetcher } from "./fetcher-service";
import { IEmailService } from "@/Domain/interfaces/mail/mail.interface";
import { ISendEmail } from "@/Domain/interfaces/auth/auth.interface";
import { FormEvent } from "react";
import { CheckPassword } from "./auth/auth-service";
import { findIndexForm } from "./shared/utils/forms";
import { signIn } from "next-auth/react";

export const sendCreatePasswordEmail = async ({
  sendEmail,
}: IEmailService): Promise<ISendEmail> => {
  try {
    // CRW .env
    const url = `http://localhost:4000/auth/create/${sendEmail}`;
    // CRW poner constante
    const response = await Fetcher<ISendEmail>(url, HTTP_METHODS[0], "appJson");
    return response;
  } catch (error) {
    throw error;
  }
};
// unir funciones
export const sendRecoveryPasswordEmail = async ({
  sendEmail,
}: IEmailService): Promise<ISendEmail> => {
  try {
    const url = `http://localhost:4000/auth/recovery/${sendEmail}`;
    const response = await Fetcher<ISendEmail>(url, HTTP_METHODS[0], "appJson");
    return response;
  } catch (error) {
    throw error;
  }
};

// CRW  mover de aquí a su servicio propio PONLE UN BONITO NOMBRE
export const handleSubmit = async (
  e: FormEvent,
  router: any,
  dataLogin: any
) => {
  e.preventDefault();
  const check = await CheckPassword(findIndexForm("email", dataLogin));
  check
    ? signIn("credentials", {
      email: findIndexForm("email", dataLogin),
      password: findIndexForm("password", dataLogin),
      callbackUrl: "/",
    })
    : router.push("/send-email");
};
