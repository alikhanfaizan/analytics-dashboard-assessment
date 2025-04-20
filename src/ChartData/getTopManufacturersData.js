export const getTopManufacturersData = (data) => {
    const makeCount = {};
  
    data.forEach((item) => {
      const make = item["Make"];
      if (make) {
        makeCount[make] = (makeCount[make] || 0) + 1;
      }
    });
  
    // Convert to array and sort by count descending
    const sorted = Object.entries(makeCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10);
  
    return {
      labels: sorted.map(([make]) => make),
      datasets: [
        {
          label: "Number of EVs",
          data: sorted.map(([, count]) => count),
          backgroundColor: "#4e79a7",
          borderRadius: 6,
        }
      ]
    };
  };
  