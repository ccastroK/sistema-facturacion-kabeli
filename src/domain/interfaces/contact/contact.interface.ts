import { IUser } from "../user/user.interface";

export interface IContact {
  contactId: number;
  position: string;
  telephone: string;
  user: IUser;
  deletedAt: Date;
  updateAt: Date;
  createdAt: Date;
}
