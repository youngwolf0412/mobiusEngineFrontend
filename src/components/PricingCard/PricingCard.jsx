import React from "react";
import "./PricingCard.css";

const PricingCard = () => {
  return (
    <div className="pricing-card">
      <div className="pricing-header">
        <h3 className="promo-title">April Promo</h3>
        <div className="price-container">
          <span className="price-dollar">$</span>
          <span className="price-amount">35</span>
          <span className="price-period">/week</span>
        </div>
        <div className="price-divider"></div>
      </div>

      <div className="pricing-features">
        <div className="feature-item">
          <div className="feature-icon">✓</div>
          <div className="feature-text">
            Curated jobs from 10K+ listings, refreshed every 48 hours
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon">✓</div>
          <div className="feature-text">
            Up to 20 human-applied roles per week (no bots, no fluff — just real
            company sites)
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon">✓</div>
          <div className="feature-text">
            Need more? Add extra apps for just $1.5 each
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon">✓</div>
          <div className="feature-text">
            Your own dedicated application analyst
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon">✓</div>
          <div className="feature-text">
            Personalized with up to 10 filters & 5 job titles
          </div>
        </div>
      </div>

      <button className="get-started-button">
        Get Started
        <svg
          className="button-arrow"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default PricingCard;
