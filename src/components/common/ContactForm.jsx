import React from "react";

const ContactForm = () => {
  return (
    <div data-aos="fade-down" data-aos-delay="400" className="flex-1">
      <div className="flex flex-col p-5 bg-white dark:bg-[var(--color-dark2-text)] rounded-md gap-5 drop-shadow-md flex-1 transition-colors duration-200">
        <h2 className="text-[var(--color-dark-text)] dark:text-white font-bold text-xl">
          Send us a Message
        </h2>

        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-[var(--color-dark2-text)] dark:text-[var(--color-bg-primary)] mb-1">
              Name *
            </label>
            <input
              type="text"
              required
              className="text-[var(--color-dark-text)] dark:text-[var(--color-bg-primary)] w-full border border-gray-300 dark:border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:focus:ring-[var(--color-primary2)] transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-dark2-text)] dark:text-[var(--color-bg-primary)] mb-1">
              Email *
            </label>
            <input
              type="email"
              required
              className="text-[var(--color-dark-text)] dark:text-[var(--color-bg-primary)] w-full border border-gray-300 dark:border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:focus:ring-[var(--color-primary2)] transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-dark2-text)] dark:text-[var(--color-bg-primary)] mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              pattern="[0-9+() -]*"
              required
              className="text-[var(--color-dark-text)] dark:text-[var(--color-bg-primary)] w-full border border-gray-300 dark:border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:focus:ring-[var(--color-primary2)] transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-dark2-text)] dark:text-[var(--color-bg-primary)] mb-1">
              Message *
            </label>
            <textarea
              rows="4"
              className="text-[var(--color-dark-text)] dark:text-[var(--color-bg-primary)] w-full border border-gray-300 dark:border-gray-500 rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:focus:ring-[var(--color-primary2)] transition-all duration-200"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-base font-bold py-2 rounded-md transition-all duration-200 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
