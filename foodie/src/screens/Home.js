import React, { useState, useEffect, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const foodBackgrounds = useMemo(() => [
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1920&h=1080&fit=crop'
  ], []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % foodBackgrounds.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [foodBackgrounds.length]);

  return (
    <div style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background Slideshow */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}>
        {foodBackgrounds.map((bg, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
              transform: currentSlide === index ? 'scale(1.1)' : 'scale(1)',
              animation: currentSlide === index ? 'kenburns 4s ease-out' : 'none'
            }}
          />
        ))}
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.85) 100%)',
          zIndex: 1
        }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar />
        
        {/* Hero Section */}
        <div className="container text-center" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
          <h1 style={{
            color: '#ffffff',
            fontWeight: '800',
            fontSize: '3.5rem',
            marginBottom: '1rem',
            textShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
            animation: 'fadeInDown 1s ease-out'
          }}>
            Welcome to Foodie Paradise 🍕
          </h1>
          <p style={{
            color: '#f0f0f0',
            fontSize: '1.3rem',
            marginBottom: '2.5rem',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            animation: 'fadeInUp 1s ease-out 0.3s both'
          }}>
            Discover amazing dishes crafted with passion and love
          </p>
          
          {/* Slide Indicators */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '3rem' }}>
            {foodBackgrounds.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentSlide(index)}
                style={{
                  width: currentSlide === index ? '40px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  background: currentSlide === index ? '#667eea' : 'rgba(255, 255, 255, 0.4)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>

        {/* Featured Menu Section */}
        <div className="container" style={{ paddingBottom: '4rem' }}>
          <h2 style={{
            color: '#ffffff',
            fontWeight: '700',
            fontSize: '2.5rem',
            marginBottom: '2rem',
            textAlign: 'center',
            textShadow: '0 2px 6px rgba(0, 0, 0, 0.5)'
          }}>
            Featured Menu
          </h2>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <Card 
              image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop"
              title="Margherita Pizza"
              description="Classic Italian pizza with fresh mozzarella and basil."
              price="$14.99"
            />
            <Card 
              image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
              title="Gourmet Salad"
              description="Fresh greens with seasonal vegetables and dressing."
              price="$10.99"
            />
            <Card 
              image="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop"
              title="Cheeseburger"
              description="Juicy beef patty with melted cheese and fresh toppings."
              price="$12.99"
            />
            <Card 
              image="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop"
              title="Fresh Fruits Bowl"
              description="A healthy mix of seasonal fresh fruits."
              price="$8.99"
            />
          </div>
        </div>

        <Footer />
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes kenburns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
