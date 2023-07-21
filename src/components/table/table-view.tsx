import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { CustomTable} from "./elements/custom-table";
import {
  HEADER,
  TABLETABS,
  dataFor3,
  dataForm,
  dataForm2,
  list,
} from "./mocks/mocks-table";
import style from './table-view.module.css';
import { CustomContainer } from "../shared/custom-cotainer/custom-container";
import { Title } from '../shared/Title';
import { ITab } from "@/Domain/interfaces/components/table.interface";

export const Table = () => {
  const [editedData, setEditedData] = useState(dataForm);
  const [dataSearch, setDataSearch] = useState("");
  const [valueList, setValueList] = useState(list[0]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setDataSearch(newValue);
  };

  const handleList = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValueList(newValue);
  };

  const styles = {
    table: style.table,
    search: style.search,
    articlePag: style.articlePag,
    inpSelect:style.inpSelect
  }

  return (
    <CustomContainer>
      <Title title={"Test"} classname={style.title} />
      <CustomTable
        data={editedData}
        headers={HEADER}
        tabsOptions={createTab(TABLETABS, setEditedData)}
        dataSearch={dataSearch}
        handleDataSearch={handleSearch}
        optionList={list}
        valueList={valueList}
        handleList={handleList}
        className={styles}
      />
    </CustomContainer>
  );
};

export const createTab = (
  tabsOptions: any[],
  setEditedData: Dispatch<SetStateAction<string[][]>>
): ITab[] => {
  const result = new Array<ITab>();
  tabsOptions.map((tab, index) => {
    const newTab: ITab = {
      name: tab.name,
      state: index == 0 ? true : false,
      count: tab.count,
      changeData: () => setEditedData(dataTableMapper[tab.name as dataTableKey]),
    };
    result.push(newTab);
  });
  return result;
};

type dataTableKey = keyof typeof dataTableMapper;

export const dataTableMapper = {
  Tab1: dataForm,
  Tab2: dataForm2,
  Tab3: dataFor3,
};
