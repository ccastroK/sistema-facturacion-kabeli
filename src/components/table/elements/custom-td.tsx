import { FaIcon } from "@/components/shared/icons/fa-icons";


export const CustomTD = <T,>(item:T,key:number,icon?:string) => (
    <td key={key}>{ icon ? <FaIcon icon="faEllipsisVertical"/> : item as string }</td>
)