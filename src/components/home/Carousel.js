import React from "react";
import { ReactTyped } from "react-typed";
import videoBg from "../../video/Ca_Video.mp4";

export default function CompanyTyping() {
  return (
    <div className="hero-container">
      {/* خلفية الفيديو */}
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* المحتوى */}
      <div className="hero-content">
        <h1 className="hero-title typewriter">
          <ReactTyped
            strings={["|AcCompany Advisors"]}
            typeSpeed={70}
            backSpeed={50}
          />
        </h1>

        <h3 className="hero-subtitle typewriter2">
          <ReactTyped
            strings={[
              "Business accelerator & support",
              "Small business clinic",
              "Marketing Sales skills training",
              "Team Building training",
              "Business Action plans",
              "Business research - Data Analysis",
              "Translation services - translation management",
              "Sourcing and outsourcing - Franchising services",
              "Training - Capability building",
              "Education Advisors",
              "Communication Advisors",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </h3>
      </div>
    </div>
  );
}
