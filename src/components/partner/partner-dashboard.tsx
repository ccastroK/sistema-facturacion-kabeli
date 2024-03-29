"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { Title } from "../shared/Title";
import { CustomContainer } from "../shared/custom-cotainer/custom-container";
import { USERDATA } from "../shared/custom-grafics/mocks/bar-grafic.mock";
import { BarGrafic } from "../shared/custom-grafics/bar-grafic";
import style from "./partner-dashboard.module.css";
import { PartnerInfo } from "./components/partner-indo";
import {
  DATAPARTNER,
  DATAPARTNER2,
  DATAPARTNER3,
  PARTNERTABS,
} from "./mocks/mocks-partner";
import { ScriptableContext } from "chart.js";
import { ITab } from "@/Domain/interfaces/components/table.interface";

export const PartnerDashboard = () => {
  // CRW sacar a un servicio y ponerle un nombre descriptibo
  const noSeQue = {
    labels: USERDATA.map((data) => data.name),
    datasets: [
      {
        label: "",
        data: USERDATA.map((data) => data.userGain),
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          // CRW sacarlo a una constante :D
          const gradient = ctx.createLinearGradient(0, 0, 0, 180);
          gradient.addColorStop(0, "rgba(51,68,89)");
          gradient.addColorStop(1, "rgba(185,201,221)");
          return gradient;
        },
        borderWidth: 1,
      },
    ],
  };
  const [userData, _] = useState(noSeQue);

  const [editedData, setEditedData] = useState(DATAPARTNER);
  // CRW exportarla a constantes <3
  const styles = {
    section1: style.section1,
    section2: style.section2,
    section3: style.section3,
    grid: style.grid,
    tab: style.tab,
    newSocio: style.newSocio,
    selected: style.selected,
    notSelected: style.notSelected,
  };

  return (
    <main className={style.main}>
      <section>
        <Title title="Socios" />
        <CustomContainer>
          <BarGrafic
            className={style.barGrafic}
            barData={userData}
            title="Example Title"
          />
        </CustomContainer>
      </section>
      <section>
        <PartnerInfo
          styles={styles}
          dataPartner={editedData}
          tabs={createTab(PARTNERTABS, setEditedData)}
          className={""}
        />
      </section>
    </main>
  );
};

// CRW exportar  aun servicio
export const createTab = (
  tabsOptions: any[],
  setEditedData: Dispatch<
    SetStateAction<
      {
        name: string;
        projectInfo: {
          projectType: string;
          count: number;
        }[];
      }[]
    >
  >
): ITab[] => {
  const result = new Array<ITab>();
  tabsOptions.map((tab, index) => {
    const newTab: ITab = {
      name: tab.name,
      state: index == 0 ? true : false,
      count: tab.count,
      changeData: () =>
        setEditedData(dataInfoMapper[tab.name as dataInfoMapperKey]),
    };
    result.push(newTab);
  });
  return result;
};

// CRW mandar a un archivo de tipo
type dataInfoMapperKey = keyof typeof dataInfoMapper;

// CRW mandar a un archivo de constantes <3
export const dataInfoMapper = {
  Tab1: DATAPARTNER,
  Tab2: DATAPARTNER2,
  Tab3: DATAPARTNER3,
};
