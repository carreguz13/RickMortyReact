import React from "react";

function Cards({ characters }) {
  return (
    <div>
      <div className="caja1">
        {characters.map((item) => (
          <h2>{item.name}</h2>
        ))}
      </div>
    </div>
  );
}

export default Cards;
