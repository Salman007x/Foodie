import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { APP_CONFIG, SOCIAL_LINKS } from '../constants/config';

export default function About() {
  const features = [
    {
      icon: '🚀',
      title: 'Fast Delivery',
      description: 'Get your food delivered hot and fresh within 30 minutes'
    },
    {
      icon: '🍽️',
      title: 'Quality Food',
      description: 'We source only the freshest ingredients for our dishes'
    },
    {
      icon: '👨‍🍳',
      title: 'Expert Chefs',
      description: 'Our experienced chefs prepare every meal with care'
    },
    {
      icon: '💯',
      title: 'Best Prices',
      description: 'Enjoy restaurant-quality food at affordable prices'
    }
  ];

  return (
    <>
      <Navbar />
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        padding: '2rem 0'
      }}>
        <div className="container">
          {/* Hero Section */}
          <div style={{
            textAlign: 'center',
            padding: '3rem 0',
            marginBottom: '3rem'
          }}>
            <h1 style={{
              color: '#ffffff',
              fontSize: '3.5rem',
              fontWeight: '700',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>About {APP_CONFIG.name}</h1>
            <p style={{
              color: '#a0a0b0',
              fontSize: '1.3rem',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.8'
            }}>
              {APP_CONFIG.description}. We bring delicious meals from the best restaurants 
              straight to your doorstep with just a few clicks.
            </p>
          </div>

          {/* Features Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem',
            padding: '0 1rem'
          }}>
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  background: '#1a1a2e',
                  border: '1px solid #2d2d44',
                  borderRadius: '15px',
                  padding: '2rem',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(102, 126, 234, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
                <h3 style={{
                  color: '#ffffff',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '0.75rem'
                }}>{feature.title}</h3>
                <p style={{
                  color: '#a0a0b0',
                  fontSize: '1rem',
                  lineHeight: '1.6'
                }}>{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '20px',
            padding: '3rem',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              color: '#ffffff',
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>Get in Touch</h2>
            <p style={{
              color: '#f0f0f0',
              fontSize: '1.1rem',
              marginBottom: '2rem'
            }}>Have questions? We'd love to hear from you!</p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
              marginBottom: '2rem'
            }}>
              <div>
                <strong style={{ color: '#ffffff' }}>Email:</strong>
                <p style={{ color: '#f0f0f0', margin: '0.5rem 0' }}>{APP_CONFIG.contactEmail}</p>
              </div>
              <div>
                <strong style={{ color: '#ffffff' }}>Phone:</strong>
                <p style={{ color: '#f0f0f0', margin: '0.5rem 0' }}>{APP_CONFIG.phoneNumber}</p>
              </div>
            </div>

            {/* Social Links */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              marginTop: '2rem'
            }}>
              {Object.entries(SOCIAL_LINKS).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${platform} page`}
                  style={{
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  {platform === 'facebook' && '📘'}
                  {platform === 'twitter' && '🐦'}
                  {platform === 'instagram' && '📸'}
                  {platform === 'linkedin' && '💼'}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
