import { ICustomBody } from "@/Domain/interfaces/components/table.interface";
import { CustomTD } from "./custom-td";

export const CustomTBody = <T,>({ data }: ICustomBody<T>) => (
  <tbody>
    {data.map((item, key) => (
      <tr key={key}>
        {item.map((value, index) =>
          CustomTD(
            value,
            index,
            index === item.length - 1 ? "faEllipsisVertical" : undefined
          )
        )}
      </tr>
    ))}
  </tbody>
);
