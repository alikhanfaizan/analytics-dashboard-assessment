export function getTopLocations(vehicleData, locationType = 'City') {
    const counts = {};
  
    vehicleData.forEach(vehicle => {
      const location = vehicle[locationType];
      if (location) {
        counts[location] = (counts[location] || 0) + 1;
      }
    });
  
    const sorted = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
  
    return {
      labels: sorted.map(([name]) => name),
      datasets: [{
        label: `Top 10 ${locationType}s by EV Count`,
        data: sorted.map(([_, count]) => count),
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1
      }]
    };
  }
  