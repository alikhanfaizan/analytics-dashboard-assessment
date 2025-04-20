import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { getElectricUtilityShareData } from '../../ChartData/getElectricUtilityShareData';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const ElectricUtilityShareChart = ({ vehicleData }) => {
  const chartData = getElectricUtilityShareData(vehicleData);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { font: { size: 14 } },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const count = context.raw;
            return `${context.label}: ${count} vehicles`;
          },
        },
      },
      datalabels: {
        display: true,
        formatter: (value, context) => {
          const total = context.chart._metasets[0].total;
          return `${((value / total) * 100).toFixed(1)}%`;
        },
      },
    },
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 className='text-center font-bold text-3xl mb-4  dark:text-white'>Top 5 Electric Utility Share</h1>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default ElectricUtilityShareChart;
