import React from "react";
import "../App.css";

function Buttons(props) {
  return (
    <div className="btn-container">
      {props.next ? (
        <button
          onClick={() => {
            props.setPage(props.page + 1);
          }}
        >
          Next
        </button>
      ) : null}
      {props.prev ? (
        <button
          onClick={() => {
            props.setPage(props.page - 1);
          }}
        >
          Previous
        </button>
      ) : null}
    </div>
  );
}

export default Buttons;
