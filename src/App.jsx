import './App.css'

import React, { useEffect, useState } from "react";

export default function WeatherForecast() {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto"
      );
      const data = await response.json();
      setForecast(data.daily);
    };

    fetchWeather();
  }, []);

  if (!forecast) return <div>Loading...</div>;

  return (
    <div>
      <h2>7-Day Forecast</h2>
      <ul>
        {forecast.time.map((date, index) => (
          <li key={date}>
            {date}: Max {forecast.temperature_2m_max[index]}°C, Min {forecast.temperature_2m_min[index]}°C, Precipitation {forecast.precipitation_sum[index]} mm
          </li>
        ))}
      </ul>
    </div>
  );
}
