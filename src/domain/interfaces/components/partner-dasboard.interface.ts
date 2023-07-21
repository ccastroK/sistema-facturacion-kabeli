import { ITab } from "@/components/table/elements/custom-table";

export interface ICountProject {
  count: number;
  projectType: string;
}
export interface IPartnerInfo {
  dataPartner: any[];
  styles: any;
  tabs:ITab[],
  className:string
}

export interface IPartnerProjectInfo {
  projectInfo: any[];
  className: string;
}
