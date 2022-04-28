import React from "react";
import { useSelector } from "react-redux";

function WeatherWeekDay({ info }) {
  const { i, weather } = info;

  function addDays(days) {
    const myCurrentDate = new Date();
    const myFutureDate = new Date(myCurrentDate);
    const result = new Date(myFutureDate.setDate(myFutureDate.getDate() + days))
      .toString()
      .split(" ")[0];
    return result;
  }

  return (
    <div className={`day`}>
      <div className="weekday">{addDays(i)}</div>
      <div className="forcast">
        <div className="weather-icon">
          <img
            src={`http://openweathermap.org/img/wn/${weather?.daily[i].weather[0].icon}.png`}
            alt={weather?.daily[i].weather[0].description}
          />
        </div>
        <div className="forcast-highLow">
          {Math.round(weather?.daily[i].temp.min)}°-
          {Math.round(weather?.daily[i].temp.max)}°
        </div>
      </div>
    </div>
  );
}

export default WeatherWeekDay;
