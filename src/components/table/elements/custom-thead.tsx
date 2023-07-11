import { CustomTH } from "./custom-th";

export interface ICustomHead {
    headers:string[];
}


export const CustomTHead = ({headers}:ICustomHead) => (
    <thead>
        <tr>
            {headers.map((item,key)=>(
                CustomTH(item,key)
            ))}
        </tr>
    </thead>
)