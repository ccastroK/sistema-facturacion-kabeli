import { HTTP_METHODS } from "next/dist/server/web/http";
import { Fetcher } from "./fetcher-service";
import { IEmailService } from "@/Domain/interfaces/mail/mail.interface";
import { ISendEmail } from "@/Domain/interfaces/auth/auth.interface";

export const sendCreatePasswordEmail = async ({
  sendEmail,
}: IEmailService): Promise<ISendEmail> => {
  try {
    const url = `http://localhost:4000/auth/create/${sendEmail}`;
    const response = await Fetcher<ISendEmail>(url, HTTP_METHODS[0], "appJson");
    return response;
  } catch (error) {
    throw error;
  }
};
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
