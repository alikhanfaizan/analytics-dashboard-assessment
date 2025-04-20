// This function processes the data to extract the counts of BEV and PHEV vehicles
// and formats it for use in a pie chart. It returns an object with labels and datasets for the chart.
export const getEVTypeData = (data) => {
    const counts = {
      BEV: 0,
      PHEV: 0,
    };
  
    data.forEach((item) => {
      const type = item['Electric Vehicle Type'];
      if (type?.includes('Battery Electric Vehicle')) counts.BEV += 1;
      if (type?.includes('Plug-in Hybrid Electric Vehicle')) counts.PHEV += 1;
    });
  
    const total = counts.BEV + counts.PHEV;
  
    return {
      labels: ['BEV', 'PHEV'],
      datasets: [
        {
          data: [counts.BEV, counts.PHEV],
          backgroundColor: ['#4caf50', '#ff9800'],
          borderColor: '#ffffff',
          borderWidth: 2,
          datalabels: {
            color: '#333',
            font: { weight: 'bold' },
            formatter: (value) => `${((value / total) * 100).toFixed(1)}%`,
          },
        },
      ],
    };
  };
  