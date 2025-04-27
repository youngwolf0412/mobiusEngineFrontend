import React from "react";
import "./AdvancePricingCard.css";

const AdvancePricingCard = () => {
  return (
    <div className="advance-card">
      <div className="advance-card-content">
        <div className="advance-card-header">
          <div>
            <h3 className="advance-title">Advance</h3>
            <p className="advance-subtitle">
              Top-tier support for serious job hunters.
            </p>
          </div>
        </div>

        <div className="advance-features">
          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <div className="feature-text-advance">Everything in Plus</div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <div className="feature-text-advance">
              Custom Resumes & Cover Letters
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <div className="feature-text-advance">
              20 fully customized applications/week
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <div className="feature-text-advance">
              Help with complex job searches
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <div className="feature-text-advance">
              Access to senior resume experts, Founder & Exec Coaches
            </div>
          </div>
        </div>
      </div>

      <div className="get-started-container seperate-card">
        <div className="advance-price">
          <span className="price-amount">$150</span>
          <span className="price-period">/week</span>
        </div>
        <button className="get-started-button">
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
  );
};

export default AdvancePricingCard;
