import axios from "axios";
import React, { useEffect, useState } from "react";

const CurrentWeather = () => {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=Helsinki&aqi=no`
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //Event
  const weatherInput = (e) => {
    setInput(e.target.value);
  };

  //Create new API request
  const searchWeather = () => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${input}`)
    .then(response => {
      setWeather(response.data);
    })
    .catch((err) => console.log(err));
  };

  console.log(weather);
  return (
    <div className="container">
      {weather && (
        <div>
          <div className="weatherInfo">
            <div className="search">
              <input onChange={weatherInput} type="text" />
              <button onClick={searchWeather}>Search</button>
            </div>
          </div>
          <h1>{weather.location.name}</h1>
          <h1>{weather.location.localtime}</h1>
          <h1>{weather.location.region}</h1>
          <div className="condition">
            <h3>{weather.current.condition.text}</h3>
            <h3>{weather.current.temp_c} °C</h3>
            <img src={weather.current.condition.icon} alt="weather" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentWeather;
