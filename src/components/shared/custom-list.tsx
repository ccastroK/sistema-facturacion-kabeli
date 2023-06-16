import { ICustomListProp } from "@/interfaces/components/global-components.interface";

export const CustomList = ({ item, title, className }: ICustomListProp) => (
  <section className={className}>
    <p>{title}</p>
    <ul>
      {item.map((item, key) => (
        <li key={key}>{item}</li>
      ))}
    </ul>
  </section>
);
