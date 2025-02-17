import React from "react";
import { useState } from "react";
import FishList from "./components/FishList/FishList";
import AquariumForm from "./components/AquariumForm/AquariumForm";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [view, setView] = useState("fish");
  const [fishList, setFishList] = useState([]);

  return (
    <div className="container mt-4">
      <h1 className="text-center">Plánování Akvária</h1>
      <div className="d-flex justify-content-center mb-3">
        <button
          className={`btn btn-primary mx-2 ${view === "fish" ? "active" : ""}`}
          onClick={() => setView("fish")}
        >
          Rybičky
        </button>
        <button
          className={`btn btn-primary mx-2 ${
            view === "aquarium" ? "active" : ""
          }`}
          onClick={() => setView("aquarium")}
        >
          Akvárium
        </button>
      </div>
      {view === "fish" ? (
        <FishList onFishUpdate={setFishList} />
      ) : (
        <AquariumForm fish={fishList} />
      )}
    </div>
  );
}

export default App;
