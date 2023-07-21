import { inputValidations } from "../mappers/custom-form.mapper";

export type TReferState = "none" | "success" | "warning" | "info" | "error";
export type inputValidationsKey = keyof typeof inputValidations;