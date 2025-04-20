import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { getModelReleaseData } from '../../ChartData/getModelReleaseData';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const ModelReleaseChart = ({ vehicleData }) => {
  const chartData = getModelReleaseData(vehicleData);

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { mode: 'index', intersect: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Number of Unique Models', color: '#fff'},
      },
      x: {
        title: { display: true, text: 'Model Year' },
      },
    },
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className='text-center font-bold text-3xl mb-4  dark:text-white'>New EV Models Released Per Year</h1>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ModelReleaseChart;
