interface CustomListProp {
  title?: string;
  item: string[];
  className?: string;
}

export const CustomList = ({ item, title, className }: CustomListProp) => (
  <section className={className}>
    <p>{title}</p>
    <ul>
      {item.map((item, key) => (
        <li key={key}>{item}</li>
      ))}
    </ul>
  </section>
);
