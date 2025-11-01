import React from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation("home");
  return (
    <section className="p-28 bg-gradient-to-tl from-[#622FBE] to-[#224EBC] dark:from-[#2A004D] dark:to-[#0B1C3F] transition-colors duration-200">
      <div
        data-aos="zoom-out"
        className="flex flex-col items-center justify-between gap-6"
      >
        {/* Headers */}
        <h1 className="font-bold text-6xl text-white">{t("hero.title")}</h1>
        <h1 className="text-2xl text-[var(--color-light1-text)] dark:text-[var(--color-bg-primary)]">
          {t("hero.subtitle")}
        </h1>
        <h1 className="text-lg text-[var(--color-light2-text)] dark:text-[var(--color-light1-text)] text-center max-w-3xl">
          {t("hero.description")}
        </h1>
        {/* Buttons */}
        <div className="flex flex-col items-center gap-4 justify-center pt-4">
          <button className="cursor-pointer py-3 px-6 bg-white text-[var(--color-primary)] dark:text-[#2A004D] font-semibold border-2 border-transparent rounded-md hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 whitespace-nowrap text-center">
            {t("hero.viewCeramics")}
          </button>

          <div className="text-center h-fit">
            <Link
              to="/learn-more"
              className="text-white no-underline whitespace-nowrap inline-flex items-center justify-center hover-anim"
              style={{ "--hover-color": "#ffffff" }}
            >
              {t("hero.learnMore")}
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180 mt-0.5 ml-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
