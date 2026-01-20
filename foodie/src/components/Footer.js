import React from "react";

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #1a1a2e 0%, #0f0f1e 100%)',
      borderTop: '2px solid #667eea',
      padding: '3rem 0 2rem',
      marginTop: '5rem',
      textAlign: 'center',
      boxShadow: '0 -4px 20px rgba(102, 126, 234, 0.2)'
    }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ color: '#667eea', fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>Foodie 🍔</h3>
        <p style={{ color: '#a0a0b0', fontSize: '14px', maxWidth: '600px', margin: '0 auto' }}>
          Delicious food delivered to your doorstep. Quality ingredients, amazing taste!
        </p>
      </div>
      <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
        <span style={{ cursor: 'pointer', fontSize: '1.5rem', transition: 'all 0.3s ease', filter: 'grayscale(0)' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.3) rotate(10deg)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1) rotate(0deg)'; }}>🍔</span>
        <span style={{ cursor: 'pointer', fontSize: '1.5rem', transition: 'all 0.3s ease' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.3) rotate(-10deg)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1) rotate(0deg)'; }}>🍕</span>
        <span style={{ cursor: 'pointer', fontSize: '1.5rem', transition: 'all 0.3s ease' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.3) rotate(10deg)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1) rotate(0deg)'; }}>🍰</span>
        <span style={{ cursor: 'pointer', fontSize: '1.5rem', transition: 'all 0.3s ease' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.3) rotate(-10deg)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1) rotate(0deg)'; }}>☕</span>
      </div>
      <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '0.9rem' }}>
        <a href="#" style={{ color: '#a0a0b0', textDecoration: 'none', transition: 'color 0.3s' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#a0a0b0'}>About</a>
        <a href="#" style={{ color: '#a0a0b0', textDecoration: 'none', transition: 'color 0.3s' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#a0a0b0'}>Privacy</a>
        <a href="#" style={{ color: '#a0a0b0', textDecoration: 'none', transition: 'color 0.3s' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#a0a0b0'}>Terms</a>
        <a href="#" style={{ color: '#a0a0b0', textDecoration: 'none', transition: 'color 0.3s' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#a0a0b0'}>Contact</a>
      </div>
      <p style={{ margin: 0, color: '#a0a0b0', fontSize: '14px' }}>
        © 2026 Foodie. All rights reserved.
      </p>
      <p style={{ margin: '0.5rem 0 0 0', color: '#667eea', fontSize: '12px', fontWeight: '500' }}>
        Made with ❤️ for food lovers everywhere
      </p>
    </footer>
  );
}
