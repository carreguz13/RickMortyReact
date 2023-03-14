import "./App.css";
import Navbar from "./components/Navbar";
import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Buttons from "./components/Buttons";

function App() {
  const [dataCharacters, setDataCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);

  const fetchCharacters = () => {
    fetch("https://rickandmortyapi.com/api/character?page=" + page)
      .then((res) => res.json())
      .then((data) => {
        setDataCharacters(data.results);
        setInfo(data.info);
      });
  };

  useEffect(() => {
    fetchCharacters();
  }, [page]);

  return (
    <>
      <Navbar title="Rick And Morty App" />
      <Buttons
        next={info.next}
        prev={info.prev}
        setPage={setPage}
        page={page}
      />
      <p className="pages">Page {page} of 42</p>
      <div className="centrar">
        <div className="main-container">
          <Cards characters={dataCharacters} />
        </div>
      </div>
      <p className="pages">Page {page} of 42</p>
      <Buttons
        next={info.next}
        prev={info.prev}
        setPage={setPage}
        page={page}
      />
    </>
  );
}

export default App;
