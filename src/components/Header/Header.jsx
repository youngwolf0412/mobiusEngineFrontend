import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src="./logo.png" alt="Logo" className="logo" />
        </div>

        <nav className="nav-menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#plans">Plans</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li className="dropdown">
              <a href="#more">
                More <span className="dropdown-arrow">▼</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="cta-button">
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            <span className="white-text">Land job interviews</span>
            <br />
            <span className="blue-text">10x </span>
            <span className="white-text">faster</span>
          </h1>
          <p>
            Custom-built resumes that match your goals, keywords, and recruiter
            expectations.
          </p>
          <div className="hero-buttons">
            <button className="get-started-btn ">
              Get Started
              <svg
                className="arrow-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <img src="./hero-section-image.png" alt="hero section image" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
