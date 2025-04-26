import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({ name, role, jobCount, videoUrl }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-video">
        <button className="play-button">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5v14l11-7z" fill="#0052CC" />
          </svg>
        </button>
      </div>
      <div className="testimonial-info">
        <p>
          <strong>
            {name} is a {role}
          </strong>{" "}
          who got over {jobCount} job interviews and an offer she accepted.
        </p>
        <button className="arrow-button">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12h14M19 12l-7-7m7 7l-7 7"
              stroke="white"
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

export default TestimonialCard;
