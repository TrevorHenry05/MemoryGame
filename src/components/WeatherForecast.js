import React from "react";
import "../styles/bootstrap.css";
import "../styles/weatherforecast.css";
import clearsunny from "../images/clearsunny.jpg";
import mostlyclear from "../images/mostlyclear.jpg";
import partlycloudy from "../images/partlycloudy.jpg";
import mostlycloudy from "../images/mostlycloudy.jpg";
import cloudy from "../images/cloudy.jpg";
import fog from "../images/fog.jpg";
import lightfog from "../images/lightfog.jpg";
import drizzle from "../images/drizzle.jpg";
import rain from "../images/rain.jpg";
import lightrain from "../images/lightrain.jpg";
import heavyrain from "../images/heavyrain.jpg";
import snow from "../images/snow.jpg";
import lightsnowandflurries from "../images/lightsnowandflurries.jpg";
import heavysnow from "../images/heavysnow.jpg";
import freezinglightrainanddrizzle from "../images/freezinglightrainanddrizzle.jpg";
import heavyfreezingrain from "../images/heavyfreezingrain.jpg";
import heavyicepellets from "../images/heavyicepellets.jpg";
import lighticepellets from "../images/lighticepellets.jpg";
import thunderstorm from "../images/thunderstorm.jpg";

// Mapping of weather codes from API to human-readable conditions and corresponding images.
const Weather_Conditions = {
  0: "Unknown",
  1000: {
    value: "Clear, Sunny",
    img: clearsunny,
  },
  1100: {
    value: "Mostly Clear",
    img: mostlyclear,
  },
  1101: {
    value: "Partly Cloudy",
    img: partlycloudy,
  },
  1102: {
    value: "Mostly Cloudy",
    img: mostlycloudy,
  },
  1001: {
    value: "Cloudy",
    img: cloudy,
  },
  2000: {
    value: "Fog",
    img: fog,
  },
  2100: {
    value: "Light Fog",
    img: lightfog,
  },
  4000: {
    value: "Drizzle",
    img: drizzle,
  },
  4001: {
    value: "Rain",
    img: rain,
  },
  4200: {
    value: "Light Rain",
    img: lightrain,
  },
  4201: {
    value: "Heavy Rain",
    img: heavyrain,
  },
  5000: {
    value: "Snow",
    img: snow,
  },
  5001: {
    value: "Flurries",
    img: lightsnowandflurries,
  },
  5100: {
    value: "Light Snow",
    img: lightsnowandflurries,
  },
  5101: {
    value: "Heavy Snow",
    img: heavysnow,
  },
  6000: {
    value: "Freezing Drizzle",
    img: freezinglightrainanddrizzle,
  },
  6001: {
    value: "Freezing Rain",
    img: heavyfreezingrain,
  },
  6200: {
    value: "Light Freezing Rain",
    img: freezinglightrainanddrizzle,
  },
  6201: {
    value: "Heavy Freezing Rain",
    img: heavyfreezingrain,
  },
  7000: {
    value: "Ice Pellets",
    img: heavyicepellets,
  },
  7101: {
    value: "Heavy Ice Pellets",
    img: heavyicepellets,
  },
  7102: {
    value: "Light Ice Pellets",
    img: lighticepellets,
  },
  8000: {
    value: "Thunderstorm",
    img: thunderstorm,
  },
};

const IMPERIAL = "imperial";

const WeatherForecast = ({ data, units }) => {
  // If there is no data, return a placeholder message
  if (!data || data.length === 0) return <p>No weather data available.</p>;

  return (
    <div className="mt-3">
      <h5 className="mb-4">Weather Forecast</h5>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map((forecast, index) => (
          <div key={index} className="col">
            <div className="card h-100 custom-card">
              <div className="card-body">
                <h6 className="card-title">
                  Time: {new Date(forecast.time).toLocaleString()}
                </h6>
                <p className="card-text">
                  Temperature: {forecast.temperature}{" "}
                  {units === IMPERIAL ? "F°" : "C°"}
                </p>{" "}
                {/* Display temperature with correct units */}
                <p className="card-text">
                  Condition: {Weather_Conditions[forecast.weatherCode].value}
                </p>{" "}
                {/* Display readable weather condition */}
                <img
                  src={Weather_Conditions[forecast.weatherCode].img}
                  className="card-img-top"
                  alt="Weather condition"
                />{" "}
                {/* Show corresponding image for weather condition */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
