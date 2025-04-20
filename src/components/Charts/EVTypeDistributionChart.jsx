import React, { useState } from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { getEVTypeData } from "../../ChartData/getEVTypeData";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const EVTypeDistributionChart = ({ vehicleData }) => {
  const [chartType, setChartType] = useState("doughnut"); // 'pie' or 'doughnut'

  if (!Array.isArray(vehicleData) || vehicleData.length === 0) {
    return <div>Loading chart...</div>;
  }

  const chartData = getEVTypeData(vehicleData);
  const total = chartData.datasets[0].data.reduce((a, b) => a + b, 0);

  const options = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: { size: 14 },
        },
      },
      datalabels: {
        display: true,
        color: "#333",
        font: { weight: "bold" },
        formatter: (value) => {
          const percent = ((value / total) * 100).toFixed(1);
          return `${value} (${percent}%)`;
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.parsed;
            const percent = ((value / total) * 100).toFixed(1);
            return `${label}: ${value} (${percent}%)`;
          },
        },
      },
    },
  };

  const handleToggle = () => {
    setChartType((prev) => (prev === "doughnut" ? "pie" : "doughnut"));
  };

  const ChartComponent = chartType === "pie" ? Pie : Doughnut;

  return (
    <div className="flex items-center justify-center h-full">
      <div className="max-w-[500px] w-full">
      <h1 className='text-center font-bold text-3xl mb-4 dark:text-white'>EV Type Distribution</h1>
        <button onClick={handleToggle} className="mb-[1rem] cursor-pointer bg-blue-500 text-white px-4 py-2 rounded"> 
          Switch to {chartType === "doughnut" ? "Pie" : "Donut"}
        </button>
        <ChartComponent data={chartData} options={options} />
      </div>
    </div>
  );
};

export default EVTypeDistributionChart;
