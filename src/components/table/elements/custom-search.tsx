import { ICustomSearch } from "@/Domain/interfaces/components/table.interface";
import { InputText } from "@/components/shared/forms/inputs/input-text";
import { FaIcon} from "@/components/shared/icons/fa-icons";




export const CustomSearch = ({wordSearch,icon,handleSearch}:ICustomSearch) => (
    <section>
        {icon ? <FaIcon icon={icon} /> : null}
        <InputText id={1} className=""  name="InpSearch" placeholder="" onChange={handleSearch} type="text" value={wordSearch} />
    </section>
)