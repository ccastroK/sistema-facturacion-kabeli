import { CustomContainer } from "@/components/shared/custom-cotainer/custom-container";
import { Title } from "../../shared/Title";
import { PartnerProjectInfo } from "./partner-project-info";
import { IPartnerInfo } from "@/Domain/interfaces/components/partner-dasboard.interface";
import { CustomTab } from "@/components/table/elements/custom-tabs";
import { useState } from "react";
import { ITab } from "@/Domain/interfaces/components/table.interface";


export const PartnerInfo = ({ dataPartner, styles, tabs}: IPartnerInfo) => {
  const [datatabs, setTabs] = useState<ITab[]>(tabs);

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

  return (
    <>
      <section className={styles.tab} >
        <CustomTab
          onClick={(e) => handleTabs(e.currentTarget.name)}
          tabList={datatabs}
        />
        <Title classname={styles.newSocio} title="Nuevo Socio" icon="faPlus" onClick={() => {}}  />
      </section>
      <section className={styles.grid} >
        {dataPartner.map((partner, key) => (
          <CustomContainer key={key}>
            <Title
              key={key}
              title={partner.name}
              classname={styles.section1}
              icon="faEllipsisVertical"
              onClick={() => {}}
            />
            <PartnerProjectInfo
              className={styles.section2}
              key={key}
              projectInfo={partner.projectInfo}
            />
            <Title
              classname={styles.section3}
              key={key}
              title="Ver Socio"
              icon="faArrowRight"
              onClick={() => {}}
            />
          </CustomContainer>
        ))}
      </section>
    </>
  );
};
