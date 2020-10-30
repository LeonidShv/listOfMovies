import React, { useState } from "react";
import Search from "../Search";
import FilmsList from "../FilmsList";
import storage from "./storage.js";
import "./App.css";

function App() {
  const [partName, setPartName] = useState("");
  const [findedFilm, setFindedFilm] = useState("");
  const [films, setFilms] = useState(storage);

  function findPartName(e) {
    setPartName(e.target.value);

    if (!e.target.value) {
      setFindedFilm("");
    }
  }

  function findFilm() {
    setFindedFilm(partName.toLowerCase());
  }

  function selectFilm(id) {
    setFilms(toggleProperty(films, id, "like"));
  }

  function toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((item) => item.id === id);
    const oldItem = arr[idx];
    const value = !oldItem[propName];

    const item = { ...arr[idx], [propName]: value };
    return [...arr.slice(0, idx), item, ...arr.slice(idx + 1)];
  }

  return (
    <div className="films">
      <Search findPartName={findPartName} findFilm={findFilm} />
      <FilmsList
        findedFilm={findedFilm}
        films={films}
        selectFilm={selectFilm}
      />
    </div>
  );
}

export default App;
