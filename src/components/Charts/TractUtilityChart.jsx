import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { getTopTractsByUtility } from "../../ChartData/getTopTractsByUtility";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const TractUtilityChart = ({ vehicleData}) => {
  const chartData = getTopTractsByUtility(vehicleData);

  

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      tooltip: { mode: "index", intersect: false },
    },
    datalabels: {
      display: true,
      color: "#333",
      font: { weight: "bold" },
      formatter: (value) => {
        return value;
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "EV Count" },
      },
      x: {
        title: { display: true, text: "Census Tract" },
      },
    },
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      <h1 className="text-center font-bold text-3xl mb-4  dark:text-white">
        Electric Utilities Serving Top EV Census Tracts
      </h1>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default TractUtilityChart;
