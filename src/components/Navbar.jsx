import React from "react";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar nabvar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand text-uppercase " href="/">
            {props.title}
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
