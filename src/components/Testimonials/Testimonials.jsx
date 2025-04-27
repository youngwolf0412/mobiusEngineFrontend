import React from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Holly",
      role: "senior executive",
      jobCount: "10",
      videoUrl: "#",
    },
    {
      id: 2,
      name: "Mark",
      role: "software developer",
      jobCount: "8",
      videoUrl: "#",
    },
    {
      id: 3,
      name: "Sarah",
      role: "marketing manager",
      jobCount: "12",
      videoUrl: "#",
    },
  ];

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What our clients have to say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            role={testimonial.role}
            jobCount={testimonial.jobCount}
            videoUrl={testimonial.videoUrl}
          />
        ))}
      </div>

      <div className="testimonials-buttons">
        <button className="more-testimonials-btn">
          More customer testimonials
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.92 11.62a1 1 0 000-.24.74.74 0 000-.23 1 1 0 00-.19-.29 1 1 0 00-.06-.09l-5-5a1 1 0 10-1.42 1.42L14.59 10H7a1 1 0 000 2h7.59l-3.3 3.29a1 1 0 000 1.42 1 1 0 001.42 0l5-5a1 1 0 00.06-.09 1 1 0 00.19-.29.74.74 0 000-.23 1 1 0 000-.24z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button className="get-started-btn">
          Get Started
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.92 11.62a1 1 0 000-.24.74.74 0 000-.23 1 1 0 00-.19-.29 1 1 0 00-.06-.09l-5-5a1 1 0 10-1.42 1.42L14.59 10H7a1 1 0 000 2h7.59l-3.3 3.29a1 1 0 000 1.42 1 1 0 001.42 0l5-5a1 1 0 00.06-.09 1 1 0 00.19-.29.74.74 0 000-.23 1 1 0 000-.24z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
