export function getModelReleaseData(data) {
    const modelYearMap = {};
  
    data.forEach(({ 'Model Year': year, Model }) => {
      const yr = parseInt(year);
      if (!yr || !Model) return;
  
      if (!modelYearMap[yr]) modelYearMap[yr] = new Set();
      modelYearMap[yr].add(Model.trim());
    });
  
    const labels = Object.keys(modelYearMap).sort();
    const modelCounts = labels.map(yr => modelYearMap[yr].size);
  
    return {
      labels,
      datasets: [
        {
          label: 'Unique EV Models Released',
          data: modelCounts,
          fill: false,
          borderColor: 'rgb(54, 162, 235)',
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          tension: 0.3,
          pointRadius: 4,
        },
      ],
    };
  }
  