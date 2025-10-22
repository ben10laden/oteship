import React from "react";
import ceramicsCardsData from "../../../data/ceramicsCardsData";
import ImageCardSmall from "../../common/ImageCardSmall";

const CeramicsSection = () => {
  return (
    <section className="bg-white dark:bg-[var(--color-dark-text)] p-20 transition-colors duration-200">
      <div className="flex flex-col justify-between items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-bold text-4xl text-[var(--color-dark-text)] dark:text-white">
            Handmade Ceramics
          </h1>
          <h1 className="text-lg text-[var(--color-secondary)] dark:text-[var(--color-light3-text)] max-w-3xl text-center">
            Beautiful, functional ceramic pieces crafted by our talented
            students, showcasing their skills and creativity
          </h1>
        </div>
        <div className="flex flex-row items-stretch justify-center gap-8 max-w-7xl">
          {ceramicsCardsData.map((card, index) => (
            <ImageCardSmall
              key={index}
              to={card.to}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CeramicsSection;
