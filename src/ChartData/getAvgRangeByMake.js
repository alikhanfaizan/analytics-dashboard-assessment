export function getAvgRangeByMake(vehicleData) {
    const makeStats = {};
  
    vehicleData.forEach((vehicle) => {
      const make = vehicle['Make'];
      const range = parseInt(vehicle['Electric Range']);
  
      if (!make || isNaN(range)) return;
  
      if (!makeStats[make]) {
        makeStats[make] = { totalRange: 0, count: 0 };
      }
  
      makeStats[make].totalRange += range;
      makeStats[make].count += 1;
    });
  
    // Create array with average range
    const avgData = Object.entries(makeStats)
      .map(([make, { totalRange, count }]) => ({
        make,
        avgRange: totalRange / count,
        count,
      }))
      .sort((a, b) => b.count - a.count) // Sort by entry count
      .slice(0, 10); // Top 10 by most entries
  
    return {
      labels: avgData.map(item => item.make),
      datasets: [{
        label: 'Average Electric Range (mi)',
        data: avgData.map(item => item.avgRange),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      }],
    };
  }
  