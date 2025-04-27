import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: "/heart.png",
      title: "Tried, Tested, Trusted",
      description:
        "Built by folks with 40+ years in tech and hiring — we know the game, and we've got your back.",
    },
    {
      id: 2,
      icon: "/person.png",
      title: "Real People, Real Help",
      description:
        "A hands-on team that actually cares — guiding you through every twist in your career path.",
    },
    {
      id: 3,
      icon: "/star.png",
      title: "Beat the Line",
      description: (
        <>
          <span className="highlighted-text">
            We search, shortlist, and apply for you, so your name shows up first
          </span>
          — every single day.
        </>
      ),
    },
  ];

  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-container">
        <h2 className="why-choose-us-title">Why Choose Us?</h2>

        <div className="features-container">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon-us">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
