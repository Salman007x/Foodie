import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
      padding: '1rem 0'
    }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{
          fontSize: '24px',
          fontWeight: '700',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
        }}>🍔 Foodie</Link>

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
            <Link className="nav-link active" to="/" style={{
              fontSize: '16px',
              fontWeight: '500',
              padding: '0.5rem 1rem'
            }}>Home</Link>
            <Link className="nav-link" to="/login" style={{
              fontSize: '16px',
              fontWeight: '500',
              padding: '0.5rem 1rem'
            }}>Login</Link>
            <Link className="nav-link" to="/" style={{
              fontSize: '16px',
              fontWeight: '500',
              padding: '0.5rem 1rem'
            }}>Pricing</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
