export { default } from "next-auth/middleware"

export const config = { matcher: ["/((?!register|login|send-email|2|3|recovery-password|password-successfull|slykash.png|table-test|socios|create-socio).*)"] };
