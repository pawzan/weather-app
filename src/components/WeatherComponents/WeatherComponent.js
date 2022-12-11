import React, { useState } from "react";
import "./WeatherComponent.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const WeatherComponent = () => {
  const [checkLikeCity, setCheckLikeCity] = useState(true);

  return (
    <div className="weatherComponent">
      <div className="weatherHeart">
        {checkLikeCity ? (
          <AiFillHeart size={44} color="red" />
        ) : (
          <AiOutlineHeart size={44} color="red" />
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
