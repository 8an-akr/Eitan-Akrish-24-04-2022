import React from "react";
import { useSelector } from "react-redux";
import FavoriteCard from "../FavoriteCard/FavoriteCard.js";

function FavoritesMain() {
  const favorites = useSelector((state) => state.favorites.value);

  return (
    favorites &&
    favorites.map((favorite, i) => {
      return <FavoriteCard key={i} favorite={favorite} />;
    })
  );
}

export default FavoritesMain;
