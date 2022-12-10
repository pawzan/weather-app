import React from "react";
import "./WeatherComponent.css";

const WeatherComponent = () => {
  return (
    <div className="weatherComponent">
      <div
        style={{ display: "flex", flexDirection: "row", marginBottom: "20px" }}
      >
        <div className="weatherPhoto">Zdjecie</div>
        <div className="weatherDisplay">18</div>
      </div>
      <div className="weatherLocation">Białystok</div>
    </div>
  );
};
export default WeatherComponent;
