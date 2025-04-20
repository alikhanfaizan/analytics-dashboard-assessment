import React from 'react';
import { Bar } from 'react-chartjs-2';
import { getTopManufacturersData } from '../../ChartData//getTopManufacturersData'; // Adjust the import path as necessary
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const TopManufacturersChart = ({ vehicleData }) => {
  const chartData = getTopManufacturersData(vehicleData);

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { mode: 'index', intersect: false },
    },
    scales: {
      x: {
        title: { display: true, text: 'Manufacturer' },
        ticks: { autoSkip: false, maxRotation: 45, minRotation: 45 },
      },
      y: {
        title: { display: true, text: 'Number of Vehicles' },
        beginAtZero: true,
      }
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <h1 className='text-center font-bold text-3xl mb-4  dark:text-white'>Top 10 EV Manufacturers</h1>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default TopManufacturersChart;
