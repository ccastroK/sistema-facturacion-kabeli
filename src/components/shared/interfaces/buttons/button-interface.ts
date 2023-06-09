export interface IButton {
  name: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => {} | undefined
  icon?:string|undefined
}