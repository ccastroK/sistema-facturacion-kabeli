import { FaIcon } from "@/components/shared/icons/fa-icons";

export const CustomTH = (item:string,key:number,icon?:string) => (
    <th key={key}>{item} { icon ?  <FaIcon icon={icon} onClick={() => {}} /> : null}</th>
)