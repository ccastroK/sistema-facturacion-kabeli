import { IClientsCompany } from "../client/client.interface";
import { IPerson } from "../person/person.interface";

export interface ICompany {
  companyId: number;
  name: string;
  rut: string;
  businessLine: string;
  businessName: string;
  potential: boolean;
  deletedAt: Date;
  updateAt: Date;
  createdAt: Date;
  clientsCompany: IClientsCompany[];
  persons: IPerson[];
}
