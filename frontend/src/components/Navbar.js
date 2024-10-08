// Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">PROFINIT</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/add-plan">post Management
</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/add-plan">Workout-Status Management
</a>

            </li>
            {/* Add more navbar items as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
