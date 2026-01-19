import React from "react";

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #1a1a2e 0%, #0f0f1e 100%)',
      borderTop: '2px solid #667eea',
      padding: '2rem 0',
      marginTop: '5rem',
      textAlign: 'center',
      boxShadow: '0 -4px 20px rgba(102, 126, 234, 0.2)'
    }}>
      <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
        <span style={{ cursor: 'pointer', fontSize: '1.5rem', transition: 'transform 0.3s ease' }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>🍔</span>
        <span style={{ cursor: 'pointer', fontSize: '1.5rem', transition: 'transform 0.3s ease' }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>🍕</span>
        <span style={{ cursor: 'pointer', fontSize: '1.5rem', transition: 'transform 0.3s ease' }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>🍰</span>
        <span style={{ cursor: 'pointer', fontSize: '1.5rem', transition: 'transform 0.3s ease' }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>☕</span>
      </div>
      <p style={{ margin: 0, color: '#a0a0b0', fontSize: '14px' }}>
        © 2026 Foodie. All rights reserved.
      </p>
      <p style={{ margin: '0.5rem 0 0 0', color: '#667eea', fontSize: '12px', fontWeight: '500' }}>
        Made with ❤️ for food lovers
      </p>
    </footer>
  );
}
