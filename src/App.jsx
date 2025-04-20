import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Papa from "papaparse";

import { allCharts } from "./components/Charts/charts";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [vehicleData, setVehicleData] = useState([]);
  const [selected, setSelected] = useState(9);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Fetch the CSV file from the public directory
    fetch("/Electric_Vehicle_Population_Data.csv")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((csvText) => {
        // Parse the CSV text
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setVehicleData(results.data);
          },
          error: (error) => {
            console.error("Error parsing CSV:", error);
          },
        });
      })
      .catch((error) => {
        console.error("Error fetching CSV file:", error);
      });
  }, []);

  // console.log(vehicleData)

  // console.log(selected);
  return (
    <div
      className={`h-screen w-screen ${
        darkMode ? "bg-slate-900" : "bg-white"
      }`}
    >
      <Navbar
        setDarkMode={setDarkMode}
        darkMode={darkMode}
        items={allCharts}
        setSelected={setSelected}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="w-full mt-8">
        {allCharts.map(
          (currentChart) =>
            currentChart.id === selected && (
              <div
                key={currentChart.id}
                className={`h-full ${
                  selected === currentChart.id ? "block" : "hidden"
                }`}
              >
                {/* <h1 className="text-center text-2xl font-bold text-white">
                {currentChart.name}
                </h1>
                <div className="flex justify-center items-center h-full">
                
                </div> */}
                <currentChart.chart vehicleData={vehicleData} darkMode={darkMode} />
              </div>
            )
        )}
        {/* <EVTypeDistributionChart vehicleData={vehicleData}/> */}
      </div>
    </div>
  );
}
