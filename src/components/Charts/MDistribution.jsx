
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2'; // We will use a bar chart to simulate the box plot
import { Chart as ChartJS, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { getBaseMSRPData } from '../../ChartData/getBaseMSRPData'; // Data processing logic
import ChartAnnotation from 'chartjs-plugin-annotation'; // Import the annotation plugin

// Register the chart.js plugins
ChartJS.register(Tooltip, Legend, CategoryScale, LinearScale, BarElement, ChartAnnotation);

const MDistribution= ({ vehicleData }) => {
  const [msrpData, setMsrpData] = useState([]);

  // Process MSRP data for Box Plot
  useEffect(() => {
    const data = getBaseMSRPData(vehicleData);
    console.log(data);
    setMsrpData(data);
  }, [vehicleData]);

  const chartData = {
    labels: ['Base MSRP'], // Single label for MSRP range distribution
    datasets: [
      {
        label: 'Base MSRP Distribution',
        data: [msrpData], // Box plot data
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `MSRP Range: ${tooltipItem.raw.min} - ${tooltipItem.raw.max}`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Price Range (MSRP)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'MSRP Value',
        },
      },
    },
    annotation: {
      annotations: [
        {
          type: 'boxplot',
          xMin: msrpData.q1,
          xMax: msrpData.q3,
          yMin: msrpData.min,
          yMax: msrpData.max,
          borderColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 2,
          backgroundColor: 'rgba(75, 192, 192, 0.1)',
        },
        {
          type: 'line',
          mode: 'horizontal',
          scaleID: 'y',
          value: msrpData.median,
          borderColor: 'rgba(0, 0, 0, 0.8)',
          borderWidth: 2,
          label: {
            enabled: true,
            content: 'Median',
            position: 'left',
          },
        },
      ],
    },
  };

  return (
    <div>
      <h2>Base MSRP Range Distribution (Box Plot)</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default MDistribution;
