export function getRangeOverTimeData(data) {
    const yearlyData = {};
  
    data.forEach(({ 'Model Year': year, 'Electric Range': range, 'Electric Vehicle Type': type }) => {
      const yr = parseInt(year);
      const rng = parseInt(range);
  
      if (!yr || !rng || !type) return;
  
      if (!yearlyData[yr]) yearlyData[yr] = { BEV: [], PHEV: [] };
      if (type.includes('BEV')) yearlyData[yr].BEV.push(rng);
      else if (type.includes('PHEV')) yearlyData[yr].PHEV.push(rng);
    });
  
    const labels = Object.keys(yearlyData).sort();
    const bevAverages = labels.map(yr => avg(yearlyData[yr].BEV));
    const phevAverages = labels.map(yr => avg(yearlyData[yr].PHEV));
  
    return {
      labels,
      datasets: [
        {
          label: 'BEV',
          data: bevAverages,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.3,
        },
        {
          label: 'PHEV',
          data: phevAverages,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          tension: 0.3,
        },
      ],
    };
  }
  
  function avg(arr) {
    return arr.length ? (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2) : 0;
  }
  