import { InputText } from "./inputText";
import { Button } from "@/components/shared/Button";

type FromProps = {
  classname: string;
  classname
  formMock:any[];
};



export const FormSocio = ({classname,formMock}:FromProps) => {
  return (
    <form>
      {formMock.map((item,key)=>(
        <InputText classname={classname} key={key} nombre={item.name} placeholder={item.placeholder} value={item.value} />
      ))}
      <Button/>
      but
    </form>
  );
};
