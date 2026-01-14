// Application configuration constants
export const APP_CONFIG = {
  name: 'Foodie',
  version: '1.0.0',
  description: 'A modern food delivery application',
  contactEmail: 'support@foodie.com',
  phoneNumber: '+1-800-FOODIE',
};

// API configuration (add your backend URL here)
export const API_CONFIG = {
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
};

// Social media links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/foodie',
  twitter: 'https://twitter.com/foodie',
  instagram: 'https://instagram.com/foodie',
  linkedin: 'https://linkedin.com/company/foodie',
};

// Image fallbacks
export const DEFAULT_IMAGES = {
  food: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
  hero: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop',
  placeholder: 'https://via.placeholder.com/400x300?text=Food+Image',
};

// Animation durations (in milliseconds)
export const ANIMATION_DURATIONS = {
  slideshow: 4000,
  cardHover: 300,
  transition: 200,
};
