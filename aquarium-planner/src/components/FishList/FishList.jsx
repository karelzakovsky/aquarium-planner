import React from "react";
import { useState, useEffect } from "react";
import "./FishList.css";

function FishList({ onFishUpdate }) {
  const [fish, setFish] = useState(() => {
    const savedFish = localStorage.getItem("fishList");
    return savedFish ? JSON.parse(savedFish) : [];
  });

  const [name, setName] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    localStorage.setItem("fishList", JSON.stringify(fish));
    onFishUpdate(fish);
  }, [fish]);

  const addFish = () => {
    if (!name || !size) return;
    const newFish = [...fish, { name, size }];
    setFish(newFish);
    setName("");
    setSize("");
  };

  const removeFish = (index) => {
    const newFish = fish.filter((_, i) => i !== index);
    setFish(newFish);
  };

  return (
    <div className="fish-list">
      <h2>Seznam rybiček</h2>
      <ul className="list-group mb-3">
        {fish.map((f, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between"
          >
            {f.name} - {f.size === "small" ? "Malá" : "Velká"}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeFish(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <div>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Jméno rybičky"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          className="form-select mb-2"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="">Vyber druh</option>
          <option value="small">Malá</option>
          <option value="large">Velká</option>
        </select>
        <button
          className="btn btn-success"
          onClick={addFish}
          disabled={!name || !size}
        >
          Přidat rybičku
        </button>
      </div>
    </div>
  );
}

export default FishList;
