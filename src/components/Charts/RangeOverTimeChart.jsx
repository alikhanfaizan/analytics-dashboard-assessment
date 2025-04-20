import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { getRangeOverTimeData } from '../../ChartData/getRangeOverTimeData';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const RangeOverTimeChart = ({ vehicleData }) => {
  const chartData = getRangeOverTimeData(vehicleData);

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      tooltip: { mode: 'index', intersect: false },
    },
    scales: {
      y: { title: { display: true, text: 'Average Electric Range (miles)' } },
      x: { title: { display: true, text: 'Model Year' } },
    },
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className='text-center font-bold text-3xl mb-4  dark:text-white'>Electric Range by Vehicle Type Over Time</h1>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default RangeOverTimeChart;
