import React from "react";
import "./ResumeBuilding.css";

const ResumeBuilding = () => {
  return (
    <section className="resume-building">
      <div className="resume-container">
        <div className="resume-header">
          <h2>Resume Building & Coaching</h2>
          <p>
            Let's talk about where you're headed — and how your resume can get
            you there.
          </p>
          <p className="call-to-action">Schedule a call to get started.</p>
        </div>

        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="card-header">
              <h3>Resume Rebuild</h3>
              <p>
                Crafted for senior to VP-level professionals ready for their
                next big step.
              </p>
            </div>

            <div className="price">
              <span className="amount">$1000</span>
              <span className="period">one time</span>
            </div>

            <hr className="divider" />

            <ul className="features">
              <li>
                <div className="check-icon"></div>
                <span>3+ 30-min coaching</span>
              </li>
              <li>
                <div className="check-icon"></div>
                <span>Focused on storytelling, not just formatting</span>
              </li>
              <li>
                <div className="check-icon"></div>
                <span>Analyst + full application team on Pacific hours</span>
              </li>
              <li>
                <div className="check-icon"></div>
                <span>Tailored to your target industry, company, or role</span>
              </li>
              <li>
                <div className="check-icon"></div>
                <span>
                  Direct work with our co-founder (ex-Google, JP Morgan)
                </span>
              </li>
              <li>
                <div className="check-icon"></div>
                <span>
                  Executive coaching from UC Berkeley alum with 10+ yrs
                  experience
                </span>
              </li>
              <li>
                <div className="check-icon"></div>
                <span>Resume Rebuild portfolio available upon request</span>
              </li>
            </ul>

            <button className="get-started-btn">
              Get Started <span className="arrow">→</span>
            </button>
          </div>

          <div className="pricing-card">
            <div className="card-header">
              <h3>Interview Prep</h3>
              <p>
                Two sessions to sharpen your story, confidence, and clarity —
                fast.
              </p>
            </div>

            <div className="price">
              <span className="amount">$500</span>
              <span className="period">one time</span>
            </div>

            <hr className="divider" />

            <ul className="features">
              <li>
                <div className="check-icon"></div>
                <span>2× 45-min live coaching with our co-founder</span>
              </li>
              <li>
                <div className="check-icon"></div>
                <span>Real-time, practical feedback</span>
              </li>
              <li>
                <div className="check-icon"></div>
                <span>Build clarity, empathy & executive presence</span>
              </li>
              <li>
                <div className="check-icon"></div>
                <span>
                  For senior and leadership roles — technical & non-technical
                </span>
              </li>
            </ul>

            <button className="get-started-btn">
              Get Started <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeBuilding;
