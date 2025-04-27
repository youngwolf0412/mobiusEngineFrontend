import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Ashwin",
      image: "/man-about-us.png", // Using the actual image from public folder
      role: "Founder",
      linkedIn: "#",
      bio: [
        "is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.",
        "Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.",
      ],
    },
    {
      id: 2,
      name: "Nicole",
      image: "/woman-about-us.png", // Using the actual image from public folder
      role: "Executive Coach",
      linkedIn: "#",
      bio: [
        "is an Executive coach at Mobius specializing in resume builds and career advisory.",
        "With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, holistic approach to help job seekers confidently stand out and land roles that truly match their skills and potential.",
      ],
    },
  ];

  return (
    <section className="about-us-section">
      <div className="about-us-content">
        <h2 className="about-us-title">About Us</h2>

        <div className="team-members-container">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <div className="team-member-image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-member-image"
                />
                <a href={member.linkedIn} className="linkedin-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">
                  {member.name}{" "}
                  <span className="team-member-bio">{member.bio[0]}</span>
                </h3>
                {member.bio.slice(1).map((paragraph, idx) => (
                  <p key={idx} className="team-member-bio-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="about-us-links">
            <a href="#" className="board-link">
              Learn more about our Board of Advisors →
            </a>
            <a href="#" className="linkedin-link">
              Follow us on our LinkedIn page →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
