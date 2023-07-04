import { IContact } from "../contact/contact.interface";
import { IPerson } from "../person/person.interface";
import { IRole } from "../role/role.interface";

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
export interface IUserRole {
  user: IUser;
  role: IRole;
  roleUsersId?: number;
}
