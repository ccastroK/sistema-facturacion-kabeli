import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  // CRW elimina los imports no usados <3
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
// CRW  mandar a interfaces
export interface IBarGrafic {
  barData: any;
  title: string;
  className: string;
}

export const BarGrafic = ({ barData, title, className }: IBarGrafic) => {
  // CRW mandar a un archivo de options
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
    responsive: true,
    plugins: { legend: { display: false } },
    maintainAspectRatio: true,
    aspectRatio: 7,
  };
  // CRW le di el okey <3
  //Hablar con anibal
  return (
    <section className={className}>
      <h2>{title}</h2>
      <Bar data={barData} options={options}></Bar>
    </section>
  );
};
