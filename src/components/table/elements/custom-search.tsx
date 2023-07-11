import { InputText } from "@/components/shared/forms/inputs/input-text";
import { faIcon } from "@/components/shared/icons/fa-icons";
import { ChangeEvent } from "react";

export interface ICustomSearch {
    wordSearch:string;
    icon?:string;
    handleSearch:(event: ChangeEvent<HTMLInputElement>) => void
}

export const CustomSearch = ({wordSearch,icon,handleSearch}:ICustomSearch) => (
    <section>
        {icon ? faIcon(icon) : null}
        <InputText id={1} classname="" name="InpSearch" placeholder="" onChange={handleSearch} type="text" value={wordSearch} />
    </section>
)