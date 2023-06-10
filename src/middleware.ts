export { default } from "next-auth/middleware"

export const config = { matcher: ["/((?!register|login|send-email|2|3).*)"] };
