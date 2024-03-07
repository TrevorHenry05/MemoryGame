import React, { useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherForecast from "./WeatherForecast";
import "../styles/bootstrap.css";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState([]); // State to store fetched weather data
  const [units, setUnits] = useState("metric"); // State to store measurement units (metric or imperial)

  // Function to fetch weather data from API
  const fetchWeather = async ({ location, timestep, units }) => {
    const apiKey = "YOUR_API_KEY";
    const url = `https://api.tomorrow.io/v4/timelines?location=${location}&fields=temperature,weatherCode&timesteps=${timestep}&units=${units}&apikey=${apiKey}`;

    try {
      const response = await fetch(url); // Fetch weather data from API and convert to JSON
      const data = await response.json();
      console.log(data);

      // Extract important data from the response
      const timelineData = data.data.timelines[0].intervals.map((interval) => ({
        time: interval.startTime,
        temperature: interval.values.temperature,
        weatherCode: interval.values.weatherCode,
      }));

      setUnits(units); // Update units state
      setWeatherData(timelineData); // Update weather data state with fetched data
    } catch (error) {
      console.error("Failed to fetch weather data", error);
    }
  };

  return (
    <div className="container">
      <WeatherForm onSubmit={fetchWeather} />
      <WeatherForecast data={weatherData} units={units} />
    </div>
  );
};

export default WeatherApp;
