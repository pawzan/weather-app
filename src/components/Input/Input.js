import React, { useState } from "react";
import "./Input.css";

const Input = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleButton = () => {
    console.log("test");
  };

  return (
    <div className="Input">
      <input
        type="text"
        placeholder="Wyszukaj miasto"
        onChange={handleChange}
        value={input}
      ></input>
      <button className="InputButton" onClick={handleButton}>
        Szukaj
      </button>
    </div>
  );
};

export default Input;
