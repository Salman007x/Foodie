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
        padding: '2rem 0'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{
              color: '#ffffff',
              fontSize: '3rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>Our Menu</h1>
            <p style={{
              color: '#a0a0b0',
              fontSize: '1.2rem'
            }}>Discover our delicious offerings</p>
          </div>

          {/* Search Bar */}
          <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <input
              type="text"
              placeholder="Search for dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search menu items"
              style={{
                padding: '1rem 1.5rem',
                fontSize: '1rem',
                borderRadius: '50px',
                border: '2px solid #667eea',
                background: '#2d2d44',
                color: '#ffffff',
                width: '100%',
                maxWidth: '500px',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#764ba2';
                e.target.style.boxShadow = '0 0 20px rgba(102, 126, 234, 0.3)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#667eea';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          {/* Category Filters */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}>
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '50px',
                  border: 'none',
                  background: selectedCategory === category 
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    : '#2d2d44',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: selectedCategory === category 
                    ? '0 4px 15px rgba(102, 126, 234, 0.4)'
                    : 'none'
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.background = '#3a3a54';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.background = '#2d2d44';
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
            padding: '0 1rem'
          }}>
            {filteredItems.length > 0 ? (
              filteredItems.map(item => (
                <Card
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                />
              ))
            ) : (
              <div style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '3rem',
                color: '#a0a0b0'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>No items found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
