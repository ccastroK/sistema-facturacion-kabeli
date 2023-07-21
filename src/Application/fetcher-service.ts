import { HTTP_METHOD } from "next/dist/server/web/http";

const contentOptions = {
  appJson: { "Content-Type": "application/json" },
};
// CRW  cambiarle el nombre a uno descriptivo
type ObjectKey = keyof typeof contentOptions;

// CRW poner un segundo generico
async function Fetcher<T>(
  url: string,
  method: HTTP_METHOD,
  header: string,
  // CRW cambiar el type al segundo generico
  body?: any,
): Promise<T> {
  try {
    const requestOptions: RequestInit = {
      method,
      headers: contentOptions[header as ObjectKey],
      body,
    };
    const respone = await fetch(url, requestOptions);
    const responseJson: T = await respone.json();
    return responseJson;
  } catch (error) {
    throw error;
  }
}

export { Fetcher };
