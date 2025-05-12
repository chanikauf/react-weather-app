import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [search, setSearch] = useState(null);
  let [weatherData, setWeatherData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    fetchWeather();
  }

  function updateSearch(event) {
    setSearch(event.target.value);
  }

  function fetchWeather() {
    function weatherDetails(response) {
      setWeatherData(response.data);
    }

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${search}&key=2d0a8749coc87c3f1a0at1425f4adb36`;
    axios.get(apiUrl).then(weatherDetails);
  }

  let weatherList;

  if (weatherData) {
    weatherList = (
      <ul>
        <li>Temperature: {Math.round(weatherData.temperature.current)}°C</li>
        <li>Description: {weatherData.condition.description}</li>
        <li>Humidity: {weatherData.temperature.humidity}%</li>
        <li>Wind: {weatherData.wind.speed} km/h</li>
        <li>
          <img
            src={weatherData.condition.icon_url}
            alt={weatherData.condition.icon}
          />
        </li>
      </ul>
    );
  } else {
    weatherList = <h3>Loading...</h3>;
  }

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={updateSearch} />
        <button type="submit">Search</button>
      </form>
      {weatherList}
    </div>
  );
}
