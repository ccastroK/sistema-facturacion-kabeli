import { IEmailService } from "@/interfaces/mail/mail.interface";
import { HTTP_METHODS } from "next/dist/server/web/http";

export async function EmailService({ sendEmail }: IEmailService) {
  try {
    const url = `http://localhost:4000/auth/recovery/${sendEmail}`;
    const response = await fetch(url,{method:HTTP_METHODS[0]});
    return response;
  } catch (error) {
    throw error
  }
}
