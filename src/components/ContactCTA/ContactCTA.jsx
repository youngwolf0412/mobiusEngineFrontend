import React from "react";
import "./ContactCTA.css";

const ContactCTA = () => {
  return (
    <section className="contact-cta">
      <div className="contact-container">
        <div className="contact-left">
          <h4>STILL HAVE DOUBTS?</h4>
        </div>

        <div className="contact-center">
          <h2>Contact us</h2>
        </div>

        <div className="contact-right">
          <button className="circle-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
