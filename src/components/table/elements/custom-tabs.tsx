import { ITab } from "./custom-table";

export interface ICustomTab {
  tabList: ITab[];
  onClick: (e:React.MouseEvent<HTMLButtonElement>) => void;
}

export const CustomTab = ({ tabList,onClick }: ICustomTab) => {
  return (
    <>
      {tabList.map(({name,state}, index) => (
        <button style={{border:'none',backgroundColor:'white', color: state ? 'green' : 'grey'}} onClick={onClick} key={index}>{name}</button>
      ))}
    </>
  );
};
