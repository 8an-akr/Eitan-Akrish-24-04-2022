import React from "react";
import { useSelector } from "react-redux";
import WeatherWeekDay from "../WeatherWeekDay/WeatherWeekDay";
import "./WeatherMain.css";

function WeatherMain() {
  const weather = useSelector((state) => state.cityWeather.value);
  const address = useSelector((state) => state.address.value.name);

  const d = Date(weather?.daily[0].dt).toString();
  const todays = d.split(" ");

  console.log(todays);
  const year = todays[3];
  const month = todays[1];
  const day = todays[2];
  const weatherIconURL = `http://openweathermap.org/img/wn/${weather?.daily[0].weather[0].icon}.png`;

  return (
    <div className="weather-container">
      <div className="today">
        <div className="placeDateWeather">
          <div className="address">{address}</div>
          <div className="date">
            {month} {day}, {year}
          </div>
          <div className="weather">
            <img
              src={weatherIconURL}
              alt={weather?.daily[0]?.weather[0].description}
            />
            <div className="weather-type">
              {weather?.daily[0]?.weather[0].main}
            </div>
          </div>
        </div>
        <div className="tempHighLow">
          <div className="temp">{Math.round(weather?.current.feels_like)}°</div>
          <div className="highLow">
            {Math.round(weather?.daily[0].temp.min)}° -{" "}
            {Math.round(weather?.daily[0].temp.max)}°
          </div>
        </div>
      </div>
      <br></br>
      <div className="week">
        {weather?.daily.map(
          (day, i) => i > 0 && <WeatherWeekDay key={i} info={{ i, weather }} />
        )}
      </div>
    </div>
  );
}

export default WeatherMain;
