import { ICreatePartner, IPartnerDto } from "@/Domain/interfaces/partner/partner.interface";
import { HTTP_METHODS } from "next/dist/server/web/http";
import { Fetcher } from "./fetcher-service";

export async function CreatePartner(newPartner: IPartnerDto): Promise<boolean> {
  try {
    const body = JSON.stringify(newPartner);
    // CRW poner url en .env
    const url = "http://localhost:4000/partner";
    const response = await Fetcher<ICreatePartner>(
      url,
      HTTP_METHODS[3],
      "appJson",
      body
    );

    const condition = response.status === 201;
    return condition;
  } catch (error) {
    throw error;
  }
}
