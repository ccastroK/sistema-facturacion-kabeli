import { useState } from "react";
import { BarGrafic } from "./bar-grafic";
import { USERDATA } from "./mocks/bar-grafic.mock";

export const GraficView = () => {
  // CRW y esto? eliminar archivo <3
  const [userData, _] = useState({
    labels: USERDATA.map((data) => data.name),
    datasets: [
      {
        label: "",
        data: USERDATA.map((data) => data.userGain),
        backgroundColor: "#B9C9DD",
      },
    ],
  });
  // CRW  y esto?
  return <BarGrafic barData={userData} title="Example Title" />;
};
