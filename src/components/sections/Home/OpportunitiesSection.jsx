import React from "react";
import opportunitiesCardsData from "../../../data/opportunitiesCardsData";
import OpportunitiesCard from "../../common/OpportunitiesCard";

const OpportunitiesSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#622FBE] to-[#224EBC] dark:from-[#2A004D] dark:to-[#0B1C3F] p-20 transition-colors duration-200">
      <div className="flex flex-col justify-between items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-bold text-4xl text-white">
            Professional Development Opportunities
          </h1>
          <h1 className="text-lg text-[var(--color-bg-primary)] max-w-3xl text-center">
            Join our comprehensive training programs designed for educators,
            employers, and community leaders
          </h1>
        </div>

        <div className="flex flex-row items-stretch justify-center gap-8 max-w-7xl">
          {opportunitiesCardsData.map((card, index) => (
            <OpportunitiesCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
