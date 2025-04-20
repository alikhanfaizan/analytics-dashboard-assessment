export function getCAFVEligibilityData(vehicleData) {
    const counts = {
      'Clean Alternative Fuel Vehicle Eligible': 0,
      'Not Eligible': 0,
      'Unknown': 0
    };
  
    vehicleData.forEach(vehicle => {
      const eligibility = vehicle['Clean Alternative Fuel Vehicle (CAFV) Eligibility'];
      if (eligibility === 'Clean Alternative Fuel Vehicle Eligible') {
        counts['Clean Alternative Fuel Vehicle Eligible'] += 1;
      } else if (eligibility === 'Not Eligible') {
        counts['Not Eligible'] += 1;
      } else {
        counts['Unknown'] += 1;
      }
    });
  
    const total = counts['Clean Alternative Fuel Vehicle Eligible'] + counts['Not Eligible'] + counts['Unknown'];
  
    return {
      labels: ['Clean Alternative Fuel Vehicle Eligible', 'Not Eligible', 'Unknown'],
      datasets: [{
        label: 'CAFV Eligibility',
        data: [counts['Clean Alternative Fuel Vehicle Eligible'], counts['Not Eligible'], counts['Unknown']],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(201, 203, 207, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(201, 203, 207, 1)'],
        borderWidth: 1
      }],
      percentages: {
        'Clean Alternative Fuel Vehicle Eligible': ((counts['Clean Alternative Fuel Vehicle Eligible'] / total) * 100).toFixed(1),
        'Not Eligible': ((counts['Not Eligible'] / total) * 100).toFixed(1),
        'Unknown': ((counts['Unknown'] / total) * 100).toFixed(1),
      }
    };
  }
  