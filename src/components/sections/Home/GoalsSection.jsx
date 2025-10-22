import React from "react";
import { Link } from "react-router";
import { goalsData, goalsCardData } from "../../../data/goalsData";
import ImageCard from "../../common/ImageCard";

const GoalsSection = () => {
  return (
    <section className="bg-white dark:bg-[var(--color-dark-text)] p-20 transition-colors duration-200">
      <div className="flex flex-col justify-between items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-bold text-4xl text-[var(--color-dark-text)] dark:text-white">
            Project Goals
          </h1>
          <h1 className="text-lg text-[var(--color-secondary)] dark:text-[var(--color-light3-text)] max-w-3xl text-center">
            Our mission is to create sustainable pathways for inclusive
            entrepreneurship and meaningful employment
          </h1>
        </div>

        <div className="flex flex-row items-stretch justify-center gap-8 max-w-7xl">
          <div className="flex flex-col gap-8 justify-evenly flex-1">
            {goalsData.map((goal, index) => (
              <div key={index} className="flex gap-4">
                {/* Circle */}
                <div className="bg-[var(--color-primary)] dark:bg-[var(--color-primary2)] rounded-full flex items-center justify-center w-8 h-8 flex-shrink-0">
                  <p className="text-sm font-bold text-white m-0 p-0">
                    {goal.number}
                  </p>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1.5">
                  <h1 className="font-bold text-lg text-[var(--color-dark-text)] dark:text-white">
                    {goal.title}
                  </h1>
                  <p className="text-base text-[var(--color-secondary)] dark:text-[var(--color-light3-text)]">
                    {goal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <ImageCard
            image={goalsCardData.image}
            title={goalsCardData.title}
            description={goalsCardData.description}
          />
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
