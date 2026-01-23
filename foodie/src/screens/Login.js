import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login credentials:', credentials);
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-title">Welcome Back</h1>
            <p className="login-subtitle">Sign in to continue to Foodie</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <i className="fas fa-envelope"></i> Email Address
              </label>
              <input
                type="email"
                className="form-control form-input"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={credentials.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                <i className="fas fa-lock"></i> Password
              </label>
              <input
                type="password"
                className="form-control form-input"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-options">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="forgot-link">
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="btn btn-login">
              Sign In
            </button>

            <div className="divider">
              <span>OR</span>
            </div>

            <div className="social-login">
              <button type="button" className="btn btn-social btn-google">
                <i className="fab fa-google"></i> Continue with Google
              </button>
              <button type="button" className="btn btn-social btn-facebook">
                <i className="fab fa-facebook-f"></i> Continue with Facebook
              </button>
            </div>

            <div className="signup-link">
              Don't have an account?{' '}
              <Link to="/signup" className="link-primary">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        .login-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
          background-size: 400% 400%;
          animation: gradientFlow 15s ease infinite;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          position: relative;
          overflow: hidden;
        }

        .login-container::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
          animation: rotate 30s linear infinite;
        }

        @keyframes gradientFlow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .login-wrapper {
          width: 100%;
          max-width: 450px;
          position: relative;
          z-index: 1;
        }

        .login-card {
          background: rgba(26, 26, 46, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 30px;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(102, 126, 234, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: slideUp 0.5s ease-out, float 6s ease-in-out infinite;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .login-header {
          text-align: center;
          margin-bottom: 35px;
        }

        .login-title {
          font-size: 32px;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 10px;
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .login-subtitle {
          color: #a0a0b0;
          font-size: 16px;
          margin: 0;
        }

        .login-form {
          width: 100%;
        }

        .form-group {
          margin-bottom: 25px;
          position: relative;
        }

        .form-label {
          display: block;
          margin-bottom: 8px;
          color: #e0e0e0;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .form-label i {
          margin-right: 8px;
          color: #667eea;
        }

        .form-input {
          width: 100%;
          padding: 12px 15px;
          border: 2px solid rgba(45, 45, 68, 0.8);
          border-radius: 15px;
          font-size: 15px;
          background: rgba(22, 33, 62, 0.6);
          color: #ffffff;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .form-input:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2), 0 0 20px rgba(102, 126, 234, 0.1);
          outline: none;
          background: rgba(26, 37, 64, 0.7);
          transform: translateY(-2px);
        }

        .form-input::placeholder {
          color: #6b6b7a;
        }

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
          font-size: 14px;
        }

        .form-check-label {
          color: #a0a0b0;
          margin-left: 5px;
        }

        .forgot-link {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          position: relative;
          transition: all 0.3s ease;
        }

        .forgot-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: width 0.3s ease;
        }

        .forgot-link:hover {
          color: #8094f7;
        }

        .forgot-link:hover::after {
          width: 100%;
        }

        .btn-login {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 15px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-login::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .btn-login:hover::before {
          width: 300px;
          height: 300px;
        }

        .btn-login:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(102, 126, 234, 0.6);
        }

        .divider {
          text-align: center;
          margin: 30px 0;
          position: relative;
        }

        .divider::before,
        .divider::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 45%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.3), transparent);
        }

        .divider::before {
          left: 0;
        }

        .divider::after {
          right: 0;
        }

        .divider span {
          background: rgba(26, 26, 46, 0.7);
          backdrop-filter: blur(10px);
          padding: 0 15px;
          color: #6b6b7a;
          font-size: 14px;
        }

        .social-login {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 25px;
        }

        .btn-social {
          width: 100%;
          padding: 12px;
          border-radius: 15px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          position: relative;
          overflow: hidden;
        }

        .btn-social::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .btn-social:hover::before {
          width: 300px;
          height: 300px;
        }

        .btn-google {
          background: rgba(45, 45, 68, 0.6);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(102, 126, 234, 0.3);
          color: #ffffff;
        }

        .btn-google:hover {
          background: rgba(61, 61, 84, 0.7);
          border-color: #667eea;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
        }

        .btn-facebook {
          background: rgba(24, 119, 242, 0.8);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(24, 119, 242, 0.5);
          color: white;
        }

        .btn-facebook:hover {
          background: rgba(20, 93, 191, 0.9);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(24, 119, 242, 0.4);
        }

        .signup-link {
          text-align: center;
          color: #a0a0b0;
          font-size: 15px;
        }

        .link-primary {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          position: relative;
          transition: all 0.3s ease;
        }

        .link-primary::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: width 0.3s ease;
        }

        .link-primary:hover {
          color: #8094f7;
        }

        .link-primary:hover::after {
          width: 100%;
        }

        @media (max-width: 576px) {
          .login-card {
            padding: 30px 25px;
          }

          .login-title {
            font-size: 26px;
          }
        }
      `}</style>
    </div>
  );
}
