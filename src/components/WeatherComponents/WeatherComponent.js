import React, { useState } from "react";
import "./WeatherComponent.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const WeatherComponent = () => {
  const [checkLikeCity, setCheckLikeCity] = useState(true);

  const changeLike = () => {
    if (checkLikeCity) {
      setCheckLikeCity(false);
    } else {
      setCheckLikeCity(true);
    }
  };

  return (
    <div className="weatherComponent">
      <div className="weatherHeart">
        {checkLikeCity ? (
          <AiFillHeart size={44} color="red" onClick={changeLike} />
        ) : (
          <AiOutlineHeart size={44} color="red" oncClick={changeLike} />
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "20px",
          justifyContent: "center",
        }}
      >
        <div className="weatherPhoto">Zdjecie</div>
        <div className="weatherDisplay">18</div>
      </div>
      <div className="weatherLocation">Białystok</div>
    </div>
  );
};
export default WeatherComponent;
