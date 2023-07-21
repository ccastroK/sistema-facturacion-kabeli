import { ITable } from "@/Domain/interfaces/components/table.interface";
import { CustomTBody } from "./custom-tbody";
import { CustomTHead } from "./custom-thead";

export const Table = ({ data, headers, className }: ITable) => {
  return (
    <table className={className}>
      <CustomTHead headers={headers} />
      <CustomTBody data={data} />
    </table>
  );
};
