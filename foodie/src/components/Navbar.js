import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" role="navigation" aria-label="Main navigation" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
      padding: '1rem 0'
    }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" aria-label="Foodie home" style={{
          fontSize: '24px',
          fontWeight: '700',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
        }}>🍔 Foodie</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto" role="menubar">
            <Link className="nav-link active" to="/" role="menuitem" aria-current="page" style={{
              fontSize: '16px',
              fontWeight: '500',
              padding: '0.5rem 1rem'
            }}>Home</Link>
            <Link className="nav-link" to="/login" role="menuitem" style={{
              fontSize: '16px',
              fontWeight: '500',
              padding: '0.5rem 1rem'
            }}>Login</Link>
            <Link className="nav-link" to="/menu" role="menuitem" style={{
              fontSize: '16px',
              fontWeight: '500',
              padding: '0.5rem 1rem'
            }}>Menu</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
