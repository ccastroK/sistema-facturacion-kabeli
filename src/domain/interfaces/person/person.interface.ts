import { ICompany } from "../company/company.interface";
import { IUser } from "../user/user.interface";

export interface IPerson {
  personId: number;
  name: string;
  lastName: string;
  motherLastName: string;
  user: IUser;
  administrative_mail?: string;
  personal_mail?: string;
  telephone?: string;
  birthDate?: Date;
  company?: ICompany;
  deletedAt?: Date;
  updatedAt?: Date;
  createdAt?: Date;
}