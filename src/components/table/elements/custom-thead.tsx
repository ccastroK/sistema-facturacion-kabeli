import { CustomTH } from "./custom-th";

export interface ICustomHead {
  headers: string[];
}

export const CustomTHead = ({ headers }: ICustomHead) => (
  <thead>
    <tr>
      {headers.map((item, key) =>
        CustomTH(item, key, key === headers.length - 1 ? undefined : "faSort")
      )}
    </tr>
  </thead>
);
