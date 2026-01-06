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

      <style jsx>{`
        .login-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .login-wrapper {
          width: 100%;
          max-width: 450px;
        }

        .login-card {
          background: #1a1a2e;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          border: 1px solid #2d2d44;
          animation: slideUp 0.5s ease-out;
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

        .login-header {
          text-align: center;
          margin-bottom: 35px;
        }

        .login-title {
          font-size: 32px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 10px;
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
        }

        .form-label {
          display: block;
          margin-bottom: 8px;
          color: #e0e0e0;
          font-weight: 600;
          font-size: 14px;
        }

        .form-label i {
          margin-right: 8px;
          color: #667eea;
        }

        .form-input {
          width: 100%;
          padding: 12px 15px;
          border: 2px solid #2d2d44;
          border-radius: 10px;
          font-size: 15px;
          background: #16213e;
          color: #ffffff;
          transition: all 0.3s ease;
        }

        .form-input:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
          outline: none;
          background: #1a2540;
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
        }

        .forgot-link:hover {
          text-decoration: underline;
          color: #8094f7;
        }

        .btn-login {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .btn-login:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.5);
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
          background: #2d2d44;
        }

        .divider::before {
          left: 0;
        }

        .divider::after {
          right: 0;
        }

        .divider span {
          background: #1a1a2e;
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
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .btn-google {
          background: #2d2d44;
          border: 2px solid #3d3d54;
          color: #ffffff;
        }

        .btn-google:hover {
          background: #3d3d54;
          border-color: #667eea;
        }

        .btn-facebook {
          background: #1877f2;
          border: 2px solid #1877f2;
          color: white;
        }

        .btn-facebook:hover {
          background: #145dbf;
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
        }

        .link-primary:hover {
          text-decoration: underline;
          color: #8094f7;
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
