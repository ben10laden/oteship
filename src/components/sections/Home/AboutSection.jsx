import React from "react";
import featureCardsData from "../../../data/featureCardsData";
import FeatureCard from "../../common/FeatureCard";

const AboutSection = () => {
  return (
    <section className="bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-dark)] p-20 transition-colors duration-200">
      <div className="flex flex-col justify-between items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-bold text-4xl text-[var(--color-dark-text)] dark:text-white">
            About OTESHIP
          </h1>
          <h1 className="text-lg text-[var(--color-secondary)] dark:text-[var(--color-light3-text)] max-w-3xl text-center">
            Our Erasmus+ project bridges the gap between special education and
            inclusive entrepreneurship through innovative ceramic arts programs
          </h1>
        </div>
        <div className="flex flex-row items-stretch justify-center gap-8 max-w-7xl">
          {featureCardsData.map((card, index) => (
            <FeatureCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              to={card.to}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
