import { ChangeEvent } from "react";

export interface IInput {
  id: number;
  classname: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  options?: string[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}