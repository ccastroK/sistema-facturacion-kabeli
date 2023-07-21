
import { ICustomTab } from '@/Domain/interfaces/components/table.interface';
import style  from './custom-tab-style.module.css';



export const CustomTab = ({ tabList, onClick}: ICustomTab) => {
  return (
      <section className={style.tab}>
        {tabList.map(({ name, state, count }, index) => (
          <button
            name={name} 
            className= {state ? style.selected : style.notSelected}
            onClick={onClick}
            key={index}
          >
            { `${name} ${count ? '('+ count+')' : ''}`}
          </button>
        ))}
      </section>
  );
};
