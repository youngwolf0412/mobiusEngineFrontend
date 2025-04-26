import React from "react";
import "./WorkProcess.css";

const WorkProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Submit Intake Form",
    },
    {
      number: 2,
      title: "We do the search and curation for list of jobs",
    },
    {
      number: 3,
      title: "You approve, we do the tedious part (applying)",
    },
    {
      number: 4,
      title: "You get the interviews",
    },
  ];

  return (
    <section className="work-process">
      <h2 className="work-process-title">How we work?</h2>

      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.number} className="step">
            <div className="step-number">
              <span>{step.number}</span>
            </div>
            <div className="step-line"></div>
            <div className="step-title">{step.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
