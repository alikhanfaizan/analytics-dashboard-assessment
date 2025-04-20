const getEVRegistrationData = (data) => {
  const counts = {};

  data.forEach((item) => {
    const year = item["Model Year"];
    const type = item["Electric Vehicle Type"];

    if (!counts[year]) {
      counts[year] = { BEV: 0, PHEV: 0 };
    }

    if (type?.includes("Battery Electric Vehicle")) {
      counts[year].BEV += 1;
    } else if (type?.includes("Plug-in Hybrid Electric Vehicle")) {
      counts[year].PHEV += 1;
    }
  });

  const sortedYears = Object.keys(counts).sort((a, b) => a - b);

  return {
    labels: sortedYears,
    datasets: [
      {
        label: "Battery Electric Vehicles (BEV)",
        data: sortedYears.map((year) => counts[year].BEV),
        borderColor: "#4e79a7", // BEV line color
        backgroundColor: "rgba(78, 121, 167, 0.2)",
        tension: 0.3,
        fill: true
      },
      {
        label: "Plug-in Hybrid Electric Vehicles (PHEV)",
        data: sortedYears.map((year) => counts[year].PHEV),
        borderColor: "#f28e2b", // PHEV line color
        backgroundColor: "rgba(242, 142, 43, 0.2)",
        tension: 0.3,
        fill: true
      }
    ]
  };
};

export { getEVRegistrationData };