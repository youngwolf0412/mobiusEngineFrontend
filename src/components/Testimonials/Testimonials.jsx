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
      <h2 className="testimonials-title">Success Stories</h2>
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
    </section>
  );
};

export default Testimonials;
