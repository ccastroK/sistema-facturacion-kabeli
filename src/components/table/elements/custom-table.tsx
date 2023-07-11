import { ChangeEvent,useMemo,useState } from "react";
import { CustomTab } from "./custom-tabs";
import { Table } from "./table";
import { CustomSearch } from './custom-search';
import { InputSelect } from "@/components/shared/forms/inputs/input-select";
import Pagination from "@/components/shared/paginator/pagination-view";

export interface ICustomTable {
  tabsOptions: ITab[];
  headers: string[];
  data: any[][];
  dataSearch:string;
  handleDataSearch: (event: ChangeEvent<HTMLInputElement>) => void
  optionList:string[];
  valueList:string;
  handleList:(event: ChangeEvent<HTMLInputElement>) => void
}

export interface ITab {
  name: string;
  state: boolean;
  changeData: () => void;
}

export function CustomTable({ tabsOptions, headers, data,dataSearch,handleDataSearch,handleList,optionList,valueList }: ICustomTable) {
  const pageSize = 7;
  const [tabs, setTabs] = useState<ITab[]>(tabsOptions);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleTabs = (nameTab: string): void => {
    const newTab = {
      ...tabs.find(({ name }) => name === nameTab),
      state: true,
    };
    setTabs(
      tabs.map((tab) => {
        tab.name === newTab.name && tab.changeData();
        return tab.name === newTab.name ? newTab : { ...tab, state: false };
      }) as Array<ITab>
    );
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    //return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <CustomTab
        tabList={tabs}
        onClick={(e) => handleTabs(e.currentTarget.innerHTML)}
      />
      <CustomSearch handleSearch={handleDataSearch} wordSearch={dataSearch}/>
      <Table data={data} headers={headers} />
      <InputSelect label="Ver" id={2} value={valueList} onChange={handleList} options={optionList} classname="" name="" placeholder="" type=""/>
      <Pagination currentPage={currentPage} totalCount={40} pageSize={pageSize} onPageChange={(page) => setCurrentPage(page)}/>
    </>
  );
}
