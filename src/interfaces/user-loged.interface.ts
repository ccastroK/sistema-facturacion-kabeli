import { User } from "next-auth";
import { JWT } from "next-auth/jwt";



export interface IUserLoged extends User,JWT {
  date: Date;
  status: number;
  message: string;
  data: IPerson;
  token: string;
}

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
export interface IUser {
  userId: number;
  img: string;
  person: IPerson;
  userRole: IUserRole[];
  admissionDate?: Date;
  password?: string;
  createdAt?: Date;
  deletedAt?: Date;
  updatedAt?: Date;
  contact?: IContact;
}
export interface IContact {
  contactId: number;
  position: string;
  telephone: string;
  user: IUser;
  deletedAt: Date;
  updateAt: Date;
  createdAt: Date;
}
export interface IUserRole {
  user: IUser;
  role: IRole;
  roleUsersId?: number;
}
export interface IRole {
  name: string;
  roleId?: number;
  userRole?: IUserRole[];
}
