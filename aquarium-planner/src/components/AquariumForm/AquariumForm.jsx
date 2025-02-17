import React from "react";
import { useState, useEffect } from "react";
import "./AquariumForm.css";

function AquariumForm({ fish }) {
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");

  const calculateVolume = () => (width * length * height) / 1000;
  const requiredVolume = fish.reduce(
    (sum, f) => sum + (f.size === "small" ? 10 : 20),
    0
  );
  const isValid = calculateVolume() >= requiredVolume;

  return (
    <div className="aquarium-form">
      <h2>Plánování Akvária</h2>
      <p>
        Počet ryb: {fish.length}, potřebný objem: {requiredVolume}L
      </p>
      <div className="mb-2">
        <label>Šířka (cm):</label>
        <input
          className="form-control"
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label>Délka (cm):</label>
        <input
          className="form-control"
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label>Výška (cm):</label>
        <input
          className="form-control"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button
        className={`btn ${isValid ? "btn-success" : "btn-danger"}`}
        disabled={!isValid}
      >
        {isValid
          ? "Schválit rozměry"
          : `Nedostatečný objem (${calculateVolume()}L / potřeba ${requiredVolume}L)`}
      </button>
    </div>
  );
}

export default AquariumForm;
