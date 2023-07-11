import { CustomTBody } from "./custom-tbody";
import { CustomTHead } from "./custom-thead";

export interface ITable {
  headers: string[];
  data: any[];
}

export const Table = ({ data, headers }: ITable) => {
  return (
    <table>
      <CustomTHead headers={headers} />
      <CustomTBody data={data} />
    </table>
  );
};
