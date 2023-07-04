import { ICompany } from "../company/company.interface";

export interface IClientsCompany {
  clientsCompanyId: number;
  client: IClient;
  company: ICompany;
  deletedAt: Date;
  updateAt: Date;
  createdAt: Date;
}
export interface IClient {
  clientId: number;
  admissionDate: Date;
  isPotential: boolean;
  isActive: boolean;
  deletedAt: Date;
  updateAt: Date;
  createdAt: Date;
  clientsCompany: IClientsCompany[];
}
