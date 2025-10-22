import React from "react";
import ContactForm from "../../common/ContactForm";
import contactSectionData from "../../../data/contactSectionData";

const ContactSection = () => {
  return (
    <section className="bg-[var(--color-bg-primary)] dark:bg-[var(--color-dark-text)] p-20 transition-colors duration-200">
      <div className="flex flex-col justify-between items-center gap-14">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-bold text-4xl text-[var(--color-dark-text)] dark:text-white">
            Get Involved
          </h1>
          <h1 className="text-lg text-[var(--color-secondary)] dark:text-[var(--color-light3-text)] max-w-3xl text-center">
            Join our mission to create inclusive opportunities for students with
            disabilities
          </h1>
        </div>

        <div className="flex flex-row items-stretch justify-center gap-8 max-w-7xl w-full">
          <div className="flex flex-col gap-8 justify-between flex-1">
            <h1 className="font-bold text-2xl text-[var(--color-dark-text)] dark:text-white">
              Contact Information
            </h1>
            {contactSectionData.map((school, index) => (
              <div className="flex flex-col gap-2" key={index}>
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
