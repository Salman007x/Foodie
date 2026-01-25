import React, { Suspense, lazy, Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { CartProvider } from "./context/CartContext";

// Lazy load components for better performance
const Home = lazy(() => import("./screens/Home"));
const Login = lazy(() => import("./screens/Login"));
const Menu = lazy(() => import("./screens/Menu"));
const About = lazy(() => import("./screens/About"));

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
          <div style={{ fontSize: '5rem', marginBottom: '1rem', animation: 'shake 0.5s ease-in-out' }}>😰</div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>Oops! Something went wrong</h1>
          <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem', opacity: 0.9 }}>We're sorry for the inconvenience</p>
          <p style={{ fontSize: '0.9rem', marginBottom: '2rem', opacity: 0.7 }}>Don't worry, your cart is safe!</p>
          <button 
            onClick={() => window.location.href = '/'}
            style={{
              padding: '14px 32px',
              fontSize: '1.1rem',
              border: 'none',
              borderRadius: '12px',
              background: 'white',
              color: '#f5576c',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.05) translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1) translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
            }}
          >
            🏠 Go to Home
          </button>
          <style>{`
            @keyframes shake {
              0%, 100% { transform: translateX(0); }
              25% { transform: translateX(-10px); }
              75% { transform: translateX(10px); }
            }
          `}</style>
        </div>
      );
    }

    return this.props.children;
  }
}

// Enhanced loading fallback component with spinner and food emoji
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
    <div style={{ position: 'relative', marginBottom: '30px' }}>
      <div style={{
        width: '60px',
        height: '60px',
        border: '6px solid rgba(255, 255, 255, 0.2)',
        borderTop: '6px solid white',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      <span style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '2rem',
        animation: 'bounce 1s ease-in-out infinite'
      }}>🍕</span>
    </div>
    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Loading Deliciousness...</span>
    <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>Preparing your food experience</span>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes bounce {
        0%, 100% { transform: translate(-50%, -50%) scale(1); }
        50% { transform: translate(-50%, -50%) scale(1.2); }
      }
    `}</style>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <CartProvider>
        <Router>
          <div className="app-container">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
                {/* 404 Route - catch all undefined routes */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </CartProvider>
    </ErrorBoundary>
  );
}

export default App;
