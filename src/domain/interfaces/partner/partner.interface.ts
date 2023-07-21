export interface IPartnerDto {
  name: string;
  personalMail: string;
  administrativeMail: string;
  phone: string;
  commune: string;
  address: string;
  birthdayDate: string;
  position: string;
  idAdmin: number;
}

export interface ICreatePartner {
  date: Date;
  status: number;
  message: string;
  data: string;
}
