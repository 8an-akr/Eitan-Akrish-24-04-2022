import React from "react";
import "./FavoriteCard.css";
import { useGetWeatherQuery } from "../../app/services/weatherApi";
import { weather } from "../../app/features/page/pageSlice";
import { cityWeather } from "../../app/features/cityWeather/cityWeatherSlice";
import { searchValue } from "../../app/features/searchBar/searchSlice";
import { useDispatch } from "react-redux";

function FavoriteCard({ favorite }) {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetWeatherQuery(favorite?.latLng);
  if (error || isLoading) {
    console.log(error || isLoading);
  }
  const selectFavoriteHandler = (favorite) => {
    dispatch(cityWeather(data));
    dispatch(searchValue(favorite));
    dispatch(weather());
  };

  return (
    <div
      className="weather-container"
      onClick={() => {
        selectFavoriteHandler(favorite);
      }}
    >
      <div className="today">
        <div className="placeDateWeather">
          <div className="address">{favorite.name}</div>
          <div className="weather">
            <img
              src={`http://openweathermap.org/img/wn/${data?.daily[0].weather[0].icon}.png`}
              alt={data?.daily[0]?.weather[0].description}
            />
            <div className="weather-type">
              {data?.daily[0]?.weather[0].main}
            </div>
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
    </div>
  );
}

export default FavoriteCard;
