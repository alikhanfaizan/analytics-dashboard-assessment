export function getElectricUtilityShareData(vehicleData) {
    const utilityCounts = {};
  
    vehicleData.forEach(vehicle => {
      const utility = vehicle['Electric Utility'];
      if (utility) {
        utilityCounts[utility] = (utilityCounts[utility] || 0) + 1;
      }
    });
  
    // Sort utilities by count and limit to top 10 or 15
    const sortedUtilities = Object.entries(utilityCounts)
      .sort((a, b) => b[1] - a[1])  // Sort in descending order by count
      .slice(0, 5);  // Get top 15 utilities
  
    const labels = sortedUtilities.map(item => item[0]);
    const data = sortedUtilities.map(item => item[1]);
  
    return {
      labels,
      datasets: [{
        label: 'Electric Utility Share',
        data,
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(153, 102, 255, 0.6)', 
                           'rgba(255, 159, 64, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 
                           'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)', 
                           'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)', 
                           'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(54, 162, 235, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(153, 102, 255, 1)', 
                      'rgba(255, 159, 64, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 
                      'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 
                      'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 
                      'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1
      }],
    };
  }
  