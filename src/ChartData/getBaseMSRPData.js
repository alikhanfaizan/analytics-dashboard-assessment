export const getBaseMSRPData = (vehicleData) => {
    const priceRanges = [
      { range: '$0–20k', min: 0, max: 20000 },
      { range: '$20k–40k', min: 20001, max: 40000 },
      { range: '$40k–60k', min: 40001, max: 60000 },
      { range: '$60k–80k', min: 60001, max: 80000 },
      { range: '$80k–100k', min: 80001, max: 100000 },
      { range: '$100k+', min: 100001, max: Infinity },
    ];
  
    const msrpCounts = priceRanges.map((range) => {
      const count = vehicleData.filter((vehicle) => {
        const msrp = parseFloat(vehicle['Base MSRP']);
        return msrp >= range.min && msrp <= range.max && msrp > 0; // Only count valid MSRP values > 0
      }).length;
      return {
        ...range,
        count,
      };
    });
  
    return msrpCounts;
  };
  