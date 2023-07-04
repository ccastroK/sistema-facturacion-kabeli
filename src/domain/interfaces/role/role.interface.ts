import { IUserRole } from "../user/user.interface";

export interface IRole {
  name: string;
  roleId?: number;
  userRole?: IUserRole[];
}
