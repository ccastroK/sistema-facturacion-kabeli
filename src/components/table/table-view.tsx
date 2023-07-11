import { ChangeEvent, Dispatch, SetStateAction, useMemo, useState } from "react";
import { CustomTable, ITab } from "./elements/custom-table";
import { HEADER, dataFor3, dataForm, dataForm2, list } from "./mocks/mocks-table";

export const Table = () => {

  const [editedData, setEditedData] = useState(dataForm);
  const [dataSearch,setDataSearch] = useState('');
  const [valueList,setValueList] = useState(list[0]);
  


  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setDataSearch(newValue)
  }

  const handleList = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValueList(newValue);
  }



  return (
    <CustomTable
      data={editedData}
      headers={HEADER}
      tabsOptions={createTab(["Tab1", "Tab2", "Tab3"], setEditedData)}
      dataSearch={dataSearch}
      handleDataSearch={handleSearch}
      optionList={list}
      valueList={valueList}
      handleList={handleList}
    />
  );
};

export const createTab = (
  tabsOptions: string[],
  setEditedData: Dispatch<SetStateAction<string[][]>>
): ITab[] => {
  const result = new Array<ITab>();
  tabsOptions.map((tab, index) => {
    const newTab: ITab = {
      name: tab,
      state: index == 0 ? true : false,
      changeData: () => setEditedData(dataTableMapper[tab as dataTableKey]),
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
