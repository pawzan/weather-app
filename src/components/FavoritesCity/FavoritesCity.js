import React from "react";
import "./FavoritesCity.css";

const FavoritesCity = () => {
  return (
    <div className="FavoritesCityContainer">
      <div className="FavoritesLeft">
        <div className="FavoritesCityName">Białystok</div>
        <div className="FavoritesCityTemperatre">18</div>
      </div>
      <div className="FavoritesCityOptions">
        <button>Usun</button>
        <button>Pokaz wykres</button>
      </div>
    </div>
  );
};
export default FavoritesCity;
