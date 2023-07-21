import { useMemo,useState } from "react";
import { CustomTab } from "./custom-tabs";
import { Table } from "./table";
import { CustomSearch } from './custom-search';
import { InputSelect } from "@/components/shared/forms/inputs/input-select";
import Pagination from "@/components/shared/paginator/pagination-view";
import { Title } from '../../shared/Title';
import { ICustomTable, ITab } from "@/Domain/interfaces/components/table.interface";



export function CustomTable({ tabsOptions, headers, data,dataSearch,handleDataSearch,handleList,optionList,valueList,className }: ICustomTable) {
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
      <CustomTab onClick={(e) => handleTabs(e.currentTarget.name)} tabList={tabsOptions} />
      <article className={className.search}>
        <CustomSearch handleSearch={handleDataSearch} wordSearch={dataSearch} icon="faMagnifyingGlass" />
      </article>
      <Table className={className.table} data={data} headers={headers} />
      <article className={className.articlePag}>
        <section className={className.inpSelect}>
          <Title title="Ver" classname=""/>
          <InputSelect value={valueList} label="Ver" onChange={handleList} options={optionList} className="" id={1} name="" placeholder="" type="" />
        </section>
        <section>
          <Pagination currentPage={currentPage} onPageChange={setCurrentPage} pageSize={pageSize} totalCount={50}  />
        </section>
      </article>
    </>
  );
}

