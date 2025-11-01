import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguageData } from "../../../hooks/useLanguageData";
import SchoolCard from "../../common/SchoolCard";

const SchoolsSection = () => {
  const { schoolCardsData } = useLanguageData();
  const { t } = useTranslation("home");
  return (
    <section className="bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-dark)] p-20 transition-colors duration-200">
      <div className="flex flex-col justify-between items-center gap-10">
        <div
          data-aos="fade-up"
          className="flex flex-col justify-center items-center gap-4"
        >
          <h1 className="font-bold text-4xl text-[var(--color-dark-text)] dark:text-white">
            {t("schools.title")}
          </h1>
          <h1 className="text-lg text-[var(--color-secondary)] dark:text-[var(--color-light3-text)] max-w-3xl text-center">
            {t("schools.description")}
          </h1>
        </div>
        <div className="flex flex-row items-stretch justify-center gap-8 max-w-7xl">
          {schoolCardsData.map((school, index) => (
            <SchoolCard
              key={index}
              to={school.to}
              image={school.image}
              title={school.title}
              description={school.description}
              country={school.country}
              location={school.location}
              aosDelay={300 + index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolsSection;
