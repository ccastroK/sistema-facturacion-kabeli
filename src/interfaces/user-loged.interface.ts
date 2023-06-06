export interface IUserLoged {
    date:    Date;
    status:  number;
    message: string;
    data:    Data;
    token:string;
}

export interface Data {
    personId: number;
    name:     string;
    lastName: string;
    user:     User;
}

export interface User {
    userId:   number;
    img:      string;
    userRole: UserRole[];
}

export interface UserRole {
    role: Role;
}

export interface Role {
    name: string;
}
