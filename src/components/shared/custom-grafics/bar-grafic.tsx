import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
	ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJs.register(
	BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

export interface IBarGrafic {
	barData:any,
	title:string,
  className:string
}


export const BarGrafic = ({barData,title,className}:IBarGrafic) => {

  const options = {
    scales: {
      x:{
        grid: {
          display:false
        }
      }
    },
    responsive: true,
    plugins: {legend: {display: false}},
    maintainAspectRatio: true,
    aspectRatio: 7
  }
  


  //Hablar con anibal
  return (
		<section className={className}>
			<h2>{title}</h2>
			<Bar data={barData}  options={options}></Bar>
		</section>
  );
};
