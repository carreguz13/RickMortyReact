import React from "react";
import "../App.css";

function Cards({ characters }) {
  return characters.map((item, index) => {
    return (
      <div key={index} className="card">
        <img src={item.image} alt="" />
        <p>{item.name}</p>
        <p>{item.species}</p>
        <p>{item.origin.name}</p>
      </div>
    );
  });
}

export default Cards;
