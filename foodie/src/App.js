import React, { Suspense, lazy, Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Lazy load components for better performance
const Home = lazy(() => import("./screens/Home"));
const Login = lazy(() => import("./screens/Login"));

// Error Boundary Component for better error handling
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          color: 'white',
          padding: '20px',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Oops! Something went wrong</h1>
          <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>We're sorry for the inconvenience</p>
          <button 
            onClick={() => window.location.href = '/'}
            style={{
              padding: '12px 24px',
              fontSize: '1rem',
              border: 'none',
              borderRadius: '8px',
              background: 'white',
              color: '#f5576c',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            Go to Home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Enhanced loading fallback component with spinner
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white'
  }}>
    <div style={{
      width: '50px',
      height: '50px',
      border: '5px solid rgba(255, 255, 255, 0.3)',
      borderTop: '5px solid white',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      marginBottom: '20px'
    }}></div>
    <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Loading...</span>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="app-container">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              {/* 404 Route - catch all undefined routes */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
