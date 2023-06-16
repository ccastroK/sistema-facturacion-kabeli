import { HTTP_METHOD } from "next/dist/server/web/http";

const contentOptions = {
  appJson: { "Content-Type" : "application/json"},
}
     
type ObjectKey = keyof typeof contentOptions;

async function Fetcher<T>(body: any, url: string, method: HTTP_METHOD,header:string):Promise<T> {
  try {
    const requestOptions:RequestInit = {
        method,
        headers : contentOptions[header as ObjectKey],
        body
    }
    const respone = await fetch(url,requestOptions);
    const responseJson: T = await respone.json();
    return responseJson;
  } catch (error) {
    throw error;
  }
}

export {Fetcher}