import React from "react";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { toFavorites, toWeather } from "../../redux/actions/page";

function Header() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);

  return (
    <div className="header">
      <div className="logo">Your-Weather</div>
      <div className={`page-options ${page}-selected`}>
        <div
          className={`page-selector page-selector-weather selected-${
            page === "weather"
          }`}
          onClick={() => dispatch(toWeather())}
        >
          Weather
        </div>
        <div
          className={`page-selector page-selector-favorites selected-${
            page === "favorites"
          }`}
          onClick={() => dispatch(toFavorites())}
        >
          Favorites
        </div>
      </div>
    </div>
  );
}

export default Header;
