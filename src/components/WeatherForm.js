import React, { useState } from "react";
import "../styles/bootstrap.css";

const WeatherForm = ({ onSubmit }) => {
  // State variables to hold the form inputs and error message
  const [location, setLocation] = useState("");
  const [timestep, setTimestep] = useState("1h");
  const [units, setUnits] = useState("metric");
  const [error, setError] = useState("");

  // Function to validate the location input as either a ZIP code or city name
  const isValidLocation = (input) => {
    const zipCodePattern = /^\d{5}$/;
    // Couldnt Figure out how to test for valid city names
    const cityNamePattern = /^[a-zA-Z\s]+$/;
    return zipCodePattern.test(input) || cityNamePattern.test(input);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location) {
      setError("Please enter a location");
      return;
    }

    if (!isValidLocation(location)) {
      setError("Please enter a valid city name or 5-digit zip code");
      return;
    }

    setError("");
    onSubmit({ location, timestep, units }); // Call onSubmit prop function with form data
  };

  return (
    <div className="mb-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className={`form-control ${error ? "is-invalid" : ""}`}
            id="location"
            placeholder="Enter a location (e.g., City: London or Zip Code: 98133)"
            value={location}
            onChange={(e) => setLocation(e.target.value)} // Update location state on change
          />
          {error && <div className="invalid-feedback">{error}</div>}{" "}
          {/* Display error message if any */}
        </div>

        <div className="mb-3">
          <label htmlFor="timestep" className="form-label">
            Timestep
          </label>
          <select
            id="timestep"
            className="form-select"
            value={timestep}
            onChange={(e) => setTimestep(e.target.value)} // Update timestep state on change
          >
            <option value="current">Current</option>
            <option value="1h">Hourly</option>
            <option value="1d">Daily</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="units" className="form-label">
            Units
          </label>
          <select
            id="units"
            className="form-select"
            value={units}
            onChange={(e) => setUnits(e.target.value)} // Update units state on change
          >
            <option value="metric">Metric</option>
            <option value="imperial">Imperial</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Get Weather
        </button>
      </form>
    </div>
  );
};

export default WeatherForm;
