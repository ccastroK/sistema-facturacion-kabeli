import { PagesOptions, SessionOptions } from "next-auth";

const STRATEGY = "jwt";
const MAXAGE = 3600;

const SESSION:Partial<SessionOptions>= {
    strategy : STRATEGY,
    maxAge: MAXAGE
}

const SINGIN = '/login';
const PAGES:Partial<PagesOptions> = {
    signIn: SINGIN
}



export {SESSION,PAGES}
