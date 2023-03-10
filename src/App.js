import "./App.css";
import Navbar from "./components/Navbar";
import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";

function App() {
  const [dataCharacters, setDataCharacters] = useState([]);

  const fetchCharacters = () => {
    fetch("https://rickandmortyapi.com/api/character/1")
      .then((res) => res.json())
      .then((data) => setDataCharacters(data.results));
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      <Navbar title="Rick And Morty App" />
      <Cards characters={dataCharacters} />
    </>
  );
}

export default App;
