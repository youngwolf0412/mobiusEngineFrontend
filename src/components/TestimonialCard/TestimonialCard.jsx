import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({ name, role, jobCount }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-video">
        <button className="play-button">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 5v14l11-7z" fill="#fff" />
          </svg>
        </button>
      </div>
      <div className="testimonial-info">
        <p>
          <span className="name-role">
            {name} is a {role}
          </span>
          who got over {jobCount} job interviews and an offer she accepted
        </p>
        <button className="arrow-button">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="#0649E7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;
