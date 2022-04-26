import React from "react";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { favorites, weather } from "../../app/features/page/pageSlice";

function Header() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page.value);

  return (
    <div className="header">
      <div className="logo">Your-Weather</div>
      <div className={`page-options ${page}-selected`}>
        <div
          className={`page-selector page-selector-weather selected-${
            page === "weather"
          }`}
          onClick={() => dispatch(weather())}
        >
          Weather
        </div>
        <div
          className={`page-selector page-selector-favorites selected-${
            page === "favorites"
          }`}
          onClick={() => dispatch(favorites())}
        >
          Favorites
        </div>
      </div>
    </div>
  );
}

export default Header;
