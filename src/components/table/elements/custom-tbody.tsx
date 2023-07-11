import { CustomTD } from "./custom-td";
export interface ICustomBody<T> {
  data: T[][];
}

export const CustomTBody = <T,>({ data }: ICustomBody<T>) => (
  <tbody>
    {data.map((item, key) => (
      <tr key={key}>
        {item.map((value,index) => CustomTD(value,index))}
      </tr>
    ))}
  </tbody>
);
