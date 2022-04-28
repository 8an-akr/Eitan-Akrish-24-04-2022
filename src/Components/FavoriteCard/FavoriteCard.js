import React from "react";
import "./FavoriteCard.css";
import { useGetWeatherQuery } from "../../app/services/weatherApi";

function FavoriteCard({ favorite }) {
  console.log(favorite.latLng);
  const { data, error, isLoading } = useGetWeatherQuery(favorite?.latLng);
  console.log(data, error, isLoading);

  return (
    <div className="today">
      <div className="placeDateWeather">
        <div className="address">{favorite.name}</div>
        <div className="weather">
          <img
            src={`http://openweathermap.org/img/wn/${data?.daily[0].weather[0].icon}.png`}
            alt={data?.daily[0]?.weather[0].description}
          />
          <div className="weather-type">{data?.daily[0]?.weather[0].main}</div>
        </div>
      </div>
      <div className="tempHighLow">
        <div className="temp">{Math.round(data?.current.feels_like)}°</div>
        <div className="highLow">
          {Math.round(data?.daily[0].temp.min)}° -{" "}
          {Math.round(data?.daily[0].temp.max)}°
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;
