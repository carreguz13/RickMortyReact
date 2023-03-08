import "./App.css";
import Navbar from "./components/Navbar";
import React, { useEffect } from "react";

function App() {
  const fetchCharacters = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      <Navbar title="Rick And Morty App" />
    </>
  );
}

export default App;
