import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getTopLocations } from "../../ChartData/getTopLocations";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const EVByLocationChart = ({ vehicleData }) => {
  const [locationType, setLocationType] = useState("City");
  const chartData = getTopLocations(vehicleData, locationType);

  const options = {
    responsive: true,
    animation: {
      duration: 1000,
      easing: "easeInOutQuad",
    },
    plugins: {
      title: {
        display: true,
        text: `Top 10 ${locationType}s by EV Count`,
        font: { size: 18 },
      },
      datalabels: {
        display: true,
        color: "#333",
        font: { weight: "bold" },
        formatter: (value) => {
          return value;
        },
      },
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `EV Count: ${context.parsed.y || context.parsed}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1 },
      },
    },
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-2xl shadow-md">
    <h1 className="text-center font-bold text-3xl mb-4">EVs by Location</h1>
    <Bar data={chartData} options={options} />
      <div className="flex items-center justify-between mb-4">
        <select
          className=" text-sm cursor-pointer bg-blue-500 text-white px-5 py-2 rounded"
          value={locationType}
          onChange={(e) => setLocationType(e.target.value)}
        >
          <option value="City">City</option>
          <option value="County">County</option>
        </select>
      </div>
      
    </div>
  );
};

export default EVByLocationChart;
