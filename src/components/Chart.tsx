import { Bar } from "react-chartjs-2";
import { ChartData } from "chart.js";

const ChartComponent = ({ motion }) => {
  const data: ChartData<"bar", number[], string> = {
    labels: ["Agree", "Disagree"],
    datasets: [
      {
        data: [0.68, 0.32],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        barThickness: 50,
        barPercentage: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    scales: {
      x: {
        ticks: {
          format: {
            style: "percent",
          },
        },
        max: "1",
      },
      y: {
        height: 75,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: motion.title,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ChartComponent;
