import React, { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { MENU_ITEMS, CATEGORIES } from '../constants/menuData';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <Navbar />
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        padding: '2rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated background elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(118, 75, 162, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite reverse',
          zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '3rem',
            animation: 'fadeInDown 0.8s ease-out'
          }}>
            <h1 style={{
              color: '#ffffff',
              fontSize: '3rem',
              fontWeight: '700',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: 'none'
            }}>🍽️ Our Menu</h1>
            <p style={{
              color: '#a0a0b0',
              fontSize: '1.2rem'
            }}>Discover our delicious offerings</p>
          </div>

          {/* Search Bar */}
          <div style={{ 
            marginBottom: '2rem', 
            textAlign: 'center',
            animation: 'fadeInUp 0.8s ease-out 0.1s both'
          }}>
            <div style={{
              position: 'relative',
              display: 'inline-block',
              width: '100%',
              maxWidth: '500px'
            }}>
              <input
                type="text"
                placeholder="🔍 Search for dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search menu items"
                style={{
                  padding: '1rem 1.5rem 1rem 3rem',
                  fontSize: '1rem',
                  borderRadius: '50px',
                  border: '2px solid rgba(102, 126, 234, 0.3)',
                  background: 'rgba(45, 45, 68, 0.5)',
                  backdropFilter: 'blur(10px)',
                  color: '#ffffff',
                  width: '100%',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#764ba2';
                  e.target.style.boxShadow = '0 0 20px rgba(102, 126, 234, 0.4), 0 0 40px rgba(102, 126, 234, 0.2)';
                  e.target.style.background = 'rgba(45, 45, 68, 0.7)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(102, 126, 234, 0.3)';
                  e.target.style.boxShadow = 'none';
                  e.target.style.background = 'rgba(45, 45, 68, 0.5)';
                  e.target.style.transform = 'translateY(0)';
                }}
              />
            </div>
          </div>

          {/* Category Filters */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            animation: 'fadeInUp 0.8s ease-out 0.2s both'
          }}>
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '50px',
                  border: selectedCategory === category ? 'none' : '2px solid rgba(102, 126, 234, 0.3)',
                  background: selectedCategory === category 
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    : 'rgba(45, 45, 68, 0.5)',
                  backdropFilter: 'blur(10px)',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: selectedCategory === category 
                    ? '0 4px 15px rgba(102, 126, 234, 0.6)'
                    : 'none',
                  transform: selectedCategory === category ? 'scale(1.05)' : 'scale(1)'
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.background = 'rgba(61, 61, 84, 0.7)';
                    e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                    e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.5)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.background = 'rgba(45, 45, 68, 0.5)';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.3)';
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2rem',
            justifyItems: 'center',
            padding: '0 1rem',
            animation: 'fadeInUp 0.8s ease-out 0.3s both'
          }}>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div 
                  key={item.id}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${0.1 * index}s both`
                  }}
                >
                  <Card
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                  />
                </div>
              ))
            ) : (
              <div style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '3rem',
                background: 'rgba(45, 45, 68, 0.3)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(102, 126, 234, 0.2)'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '1rem',
                  color: '#ffffff'
                }}>No items found</h3>
                <p style={{ color: '#a0a0b0' }}>Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Floating animation styles */}
        <style>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }

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
        `}</style>
      </div>
      <Footer />
    </>
  );
}
