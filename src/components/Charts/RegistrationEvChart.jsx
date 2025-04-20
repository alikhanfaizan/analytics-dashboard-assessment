import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { getEVRegistrationData } from '../../ChartData/getEVRegistrationData';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler
);

const EVRegistrationsChart = ({ vehicleData }) => {
  const chartData = getEVRegistrationData(vehicleData);

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      tooltip: { mode: 'index', intersect: false }
    },
    scales: {
      x: { title: { display: true, text: 'Model Year' } },
      y: { title: { display: true, text: 'Number of Registrations' }, beginAtZero: true }
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}>
      <h1 className="text-center font-bold text-3xl mb-4  dark:text-white">EV Registrations Over Time</h1>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default EVRegistrationsChart;
