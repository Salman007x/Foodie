import React, { useState } from 'react'

export default function Card({ image, title, description, price }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const foodImages = [
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop'
  ];
  
  const defaultImage = image || foodImages[Math.floor(Math.random() * foodImages.length)];
  const defaultTitle = title || 'Delicious Meal';
  const defaultDescription = description || 'A perfect blend of flavors to satisfy your taste buds.';
  const defaultPrice = price || '$12.99';

  return (
    <div>
      <div className="card" style={{
        width: "18rem",
        background: '#1a1a2e',
        border: '1px solid #2d2d44',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.boxShadow = '0 12px 30px rgba(102, 126, 234, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4)';
      }}>
        <img 
          src={defaultImage} 
          className="card-img-top" 
          alt={defaultTitle}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body" style={{ padding: '1.25rem' }}>
          <h5 style={{ color: '#ffffff', fontWeight: '600', marginBottom: '0.5rem' }}>{defaultTitle}</h5>
          <p style={{ color: '#a0a0b0', fontSize: '14px', marginBottom: '1rem' }}>
            {defaultDescription}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '0.5rem' }}>
            <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: '500' }}>Quantity:</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#2d2d44', borderRadius: '8px', padding: '0.25rem 0.5rem' }}>
              <button 
                onClick={handleDecrement}
                style={{
                  background: 'transparent',
                  color: '#667eea',
                  border: 'none',
                  fontSize: '18px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  padding: '0 0.5rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#764ba2'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#667eea'}
              >-</button>
              <span style={{ color: '#ffffff', fontWeight: '600', minWidth: '20px', textAlign: 'center' }}>{quantity}</span>
              <button 
                onClick={handleIncrement}
                style={{
                  background: 'transparent',
                  color: '#667eea',
                  border: 'none',
                  fontSize: '18px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  padding: '0 0.5rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#764ba2'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#667eea'}
              >+</button>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#667eea', fontWeight: '700', fontSize: '20px' }}>{defaultPrice}</span>
            <button style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >Order Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
