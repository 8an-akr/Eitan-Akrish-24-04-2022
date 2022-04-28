import React from "react";
import { useSelector } from "react-redux";
import FavoriteCard from "../FavoriteCard/FavoriteCard.js";

function FavoritesMain() {
  const favorites = useSelector((state) => state.favorites.value);
  return (
    favorites &&
    favorites.map((favorite) => {
      return (
        <div className="weather-container">
          <FavoriteCard favorite={favorite} />
        </div>
      );
    })
  );
}

export default FavoritesMain;
