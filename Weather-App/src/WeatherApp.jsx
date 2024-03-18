import React from "react";
import { useState, useEffect } from "react";
import Search from "./Search";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const apiKey = "3c280b9421b7fa0b9f3433af5d179b9c";

  const fetchData = async (param) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        setError(true);
        setLoading(false);
      } else {
        const data = await response.json();
        console.log(data);
        setData(data);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setError(true);
      setLoading(false);
    }
  };

  const handleClick = () => {
    fetchData(search);
  };

  const currentDate = () => {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (error) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <div className="main">
      <h1>Weather App</h1>
      <Search search={search} setSearch={setSearch} handleClick={handleClick} />
      {data && (
        <div className="container">
          <div className="city">
            <h2>
              {data.name}, <span>{data.sys.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{currentDate()}</span>
          </div>
          <div className="temp">
            <span>{data.main.temp}°C</span>
          </div>
          <div className="weather">
            <span>{data.weather[0].main}</span>
          </div>
          <div className="info">
            <p>
              Wind Speed: <span>{data.wind.speed}</span>
            </p>
            <p>
              Humidity: <span>{data.main.humidity}%</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
