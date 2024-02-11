import React, { useState, useEffect } from "react";
import ForecastTable from "../components/ForecastTable";

interface ForecastData {
  id: number;
  location: string;
  date: string;
  forecastedSales: number;
}

const Forecast = () => {
  const [forecasts, setForecasts] = useState<ForecastData[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [locations, setLocations] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch("http://localhost:3000/forecast");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: ForecastData[] = await response.json();
        setForecasts(data);
        setLocations([...new Set(data.map((item) => item.location))]);
      } catch (error) {
        setError("Failed to fetch forecast data");
        console.error("Error fetching forecast data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
  };

  const filteredForecasts = forecasts.filter(
    (forecast) =>
      selectedLocation === "" || forecast.location === selectedLocation
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Forecasted Sales</h1>

      {error && <p className="text-red-600">{error}</p>}

      <div className="mb-4 flex space-x-2">
        <button
          className={`border p-2 ${
            selectedLocation === "" ? "bg-blue-200" : ""
          }`}
          onClick={() => handleLocationChange("")}
        >
          All Locations
        </button>
        {locations.map((location) => (
          <button
            key={location}
            className={`border p-2 ${
              selectedLocation === location ? "bg-blue-200" : ""
            }`}
            onClick={() => handleLocationChange(location)}
          >
            {location}
          </button>
        ))}
      </div>

      {loading ? <p>Loading...</p> : <ForecastTable data={filteredForecasts} />}
    </div>
  );
};

export default Forecast;
