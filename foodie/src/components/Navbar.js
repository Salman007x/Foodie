import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Foodie</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active" href="/">Home</a>
            <a className="nav-link" href="/">Features</a>
            <a className="nav-link" href="/">Pricing</a>
            <a className="nav-link disabled" href="/" tabIndex="-1">
              Disabled
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
