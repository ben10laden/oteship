import React from "react";
import ContactForm from "../../common/ContactForm";
import { useTranslation } from "react-i18next";
import { useLanguageData } from "../../../hooks/useLanguageData";

const ContactSection = () => {
  const { contactSectionData } = useLanguageData();
  const { t } = useTranslation("home");
  return (
    <section className="bg-[var(--color-bg-primary)] dark:bg-[var(--color-dark-text)] p-20 transition-colors duration-200">
      <div className="flex flex-col justify-between items-center gap-14">
        <div
          data-aos="fade-up"
          className="flex flex-col justify-center items-center gap-4"
        >
          <h1 className="font-bold text-4xl text-[var(--color-dark-text)] dark:text-white">
            {t("contact.title")}
          </h1>
          <h1 className="text-lg text-[var(--color-secondary)] dark:text-[var(--color-light3-text)] max-w-3xl text-center">
            {t("contact.description")}
          </h1>
        </div>

        <div className="flex flex-row items-stretch justify-center gap-8 max-w-7xl w-full">
          <div className="flex flex-col gap-8 justify-between flex-1">
            <h1
              data-aos="fade-right"
              data-aos-delay="150"
              data-aos-anchor={"#first-school-trigger"}
              data-aos-anchor-placement="top-bottom"
              className="font-bold text-2xl text-[var(--color-dark-text)] dark:text-white"
            >
              {t("contact.contactInfo")}
            </h1>
            {contactSectionData.map((school, index) => (
              <div
                data-aos="fade-right"
                data-aos-delay={300 + index * 100}
                data-aos-anchor={
                  index === 0 ? undefined : "#first-school-trigger"
                }
                data-aos-anchor-placement="top-bottom"
                className="flex flex-col gap-2"
                key={index}
                id={index === 0 ? "first-school-trigger" : undefined}
              >
                <h1 className="font-medium text-base text-[var(--color-dark-text)] dark:text-[var(--color-bg-primary)]">
                  {school.name}
                </h1>
                <span className="flex flex-row  items-center gap-2">
                  <i
                    className={
                      "fa-solid fa-envelope text-base text-[var(--color-primary)] dark:text-[var(--color-primary2)]"
                    }
                  ></i>
                  <p className="text-[var(--color-secondary)] dark:text-[var(--color-light3-text)]">
                    {school.email}
                  </p>
                </span>
                <span className="flex flex-row  items-center gap-2">
                  <i
                    className={
                      "fa-solid fa-phone text-base text-[var(--color-primary)] dark:text-[var(--color-primary2)]"
                    }
                  ></i>
                  <p className="text-[var(--color-secondary)] dark:text-[var(--color-light3-text)]">
                    {school.phone}
                  </p>
                </span>
                <span className="flex flex-row  items-center gap-2">
                  <i
                    className={
                      "fa-solid fa-location-dot text-base text-[var(--color-primary)] dark:text-[var(--color-primary2)]"
                    }
                  ></i>
                  <p className="text-[var(--color-secondary)] dark:text-[var(--color-light3-text)]">
                    {school.location}
                  </p>
                </span>
              </div>
            ))}
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
