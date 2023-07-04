import { IReferenceTextProps } from "@/components/shared/forms/reference-text";
import { ChangeEvent, ChangeEventHandler } from "react";

export interface IInput {
  id: number;
  className: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  options?: string[];
  referenceTexts?: IReferenceTextProps[],
  onChange: ((event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void);
}