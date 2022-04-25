import React from "react";
import Header from "../../Header/Header";
import SearchBar from "../../SearchBar/SearchBar";
import WeatherMain from "../../WeatherMain/WeatherMain";
import "./WeatherPage.css";

function Weather() {
  return (
    <div className="container">
      <Header />
      <SearchBar />
      <WeatherMain />
    </div>
  );
}

export default Weather;
