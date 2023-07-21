import { ICustomTab } from "@/Domain/interfaces/components/table.interface";
import style from "./custom-tab-style.module.css";

// CRW mandarlo a un componente shared y revisar si  funciona el cambio <3
export const CustomTab = ({ tabList, onClick }: ICustomTab) => {
  return (
    <section className={style.tab}>
      {tabList.map(({ name, state, count }, index) => {
        const countToShow = count && `(${count})`;
        return (
          <button
            name={name}
            className={state ? style.selected : style.notSelected}
            onClick={onClick}
            key={index}
          >
            {`${name} ${count && countToShow}`}
          </button>
        );
      })}
    </section>
  );
};
