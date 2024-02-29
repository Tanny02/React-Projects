import { useState } from "react";
import "./Generator.css";

const Generator = () => {
  const [type, setType] = useState(null);
  const [color, setColor] = useState(null);

  const generateHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    setColor(hexColor);
  };
  const generateRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    setColor(rgbColor);
  };

  return (
    <div
      className="container"
      style={{
        width: "40vw",
        height: "auto",
        backgroundColor: color,
      }}
    >
      <h2>
        {type ? (type === "HEX" ? "HEX Color" : "RGB Color") : "Select a type"}
      </h2>
      <h2>{color}</h2>
      <button
        onClick={() => {
          setType("HEX");
        }}
      >
        HEX
      </button>
      <button
        className="gene"
        onClick={
          type
            ? type === "HEX"
              ? generateHexColor
              : generateRgbColor
            : undefined
        }
      >
        Generate
      </button>
      <button
        onClick={() => {
          setType("RGB");
        }}
      >
        RGB
      </button>
    </div>
  );
};

export default Generator;
