export interface IButton {
  name: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void  |undefined 
  icon?:string|undefined
}