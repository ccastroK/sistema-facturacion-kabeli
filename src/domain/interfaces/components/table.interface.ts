import { ChangeEvent } from "react";

export interface ICustomSearch {
  wordSearch: string;
  icon?: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ICustomTable {
  tabsOptions: ITab[];
  headers: string[];
  data: any[][];
  dataSearch: string;
  handleDataSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  optionList: string[];
  valueList: string;
  handleList: (event: ChangeEvent<HTMLInputElement>) => void;
  className: any;
}

export interface ITab {
  name: string;
  state: boolean;
  changeData: () => void;
  count?: number;
}
export interface ICustomTab {
  tabList: ITab[];
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export interface ICustomBody<T> {
  data: T[][];
}

export interface ITable {
  headers: string[];
  data: any[];
  className: string;
}
