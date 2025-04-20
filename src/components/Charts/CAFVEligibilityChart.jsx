import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { getCAFVEligibilityData } from '../../ChartData/getCAFVEligibilityData';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const CAFVEligibilityChart = ({ vehicleData }) => {
  const chartData = getCAFVEligibilityData(vehicleData);

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
            const percentage = chartData.percentages[context.label];
            const count = context.raw;
            return `${context.label}: ${count} vehicles (${percentage}%)`;
          },
        },
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
    },
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h1 className='text-center font-bold text-3xl mb-4  dark:text-white'>CAFV Eligibility</h1>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default CAFVEligibilityChart;
