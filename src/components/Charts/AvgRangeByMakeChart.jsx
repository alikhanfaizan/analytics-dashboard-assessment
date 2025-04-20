import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { getAvgRangeByMake } from '../../ChartData/getAvgRangeByMake';
import { color } from 'chart.js/helpers';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title);

const AvgRangeByMakeChart = ({ vehicleData }) => {
  if (!Array.isArray(vehicleData) || vehicleData.length === 0) {
    return <div>Loading chart...</div>;
  }

  const chartData = getAvgRangeByMake(vehicleData);

  const options = {
    indexAxis: 'y', // horizontal bar
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) =>
            `${context.dataset.label}: ${context.parsed.x.toFixed(1)} mi`,
        },
      },
      // title: {
      //   display: true,
      //   text: 'Average Electric Range by Manufacturer (Top 10)',
      //   font: { size: 30 },
      //   color: 'black',
      // },
    },
    datalabels: {
      display: true,
      color: "#333",
      font: { weight: "bold" },
      formatter: (value, context) => {
        const percentage = chartData.percentages[context.chart.data.labels[context.dataIndex]];
        return `${percentage}%`;
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Miles',
        },
      },
      y: {
        ticks: {
          font: { size: 10 },
        },
      },
    },
  };

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto', color: '#000' }}>
      <h1 className="text-center font-bold text-3xl mb-4  dark:text-white">
        Average Electric Range by Manufacturer (Top 10)
      </h1>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default AvgRangeByMakeChart;
