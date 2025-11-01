import { Link } from "react-router";
import { useState, useRef, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { t, i18n } = useTranslation("layouts");
  const dropdownRef = useRef(null);

  const languages = [
    { code: "en", name: "English", flag: "us" },
    { code: "ελ", name: "Ελληνικά", flag: "gr" },
    { code: "tr", name: "Türkçe", flag: "tr" },
    { code: "pl", name: "Polski", flag: "pl" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const selectLanguage = (language) => {
    i18n.changeLanguage(language.code);
    setIsLanguageOpen(false);
  };

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <nav className="bg-white dark:bg-[var(--color-bg-dark)] p-2.5 px-32 flex items-center drop-shadow-sm sticky top-0 z-10 transition-colors duration-200">
      {/* Left Section */}
      <div className="flex flex-col flex-1">
        <Link to="/" className="max-w-fit">
          <h1 className="text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-primary2)]">
            OTESHIP
          </h1>
          <div className="flex flex-row space-x-2">
            <span className="fi fi-eu text-base"></span>
            <h2 className="text-xs text-[var(--color-secondary)] dark:text-[var(--color-light3-text)]">
              Erasmus+
            </h2>
          </div>
        </Link>
      </div>

      {/* Center Section */}
      <div className="[--hover-color:#aeaeae] dark:[--hover-color:#aeaeaebd] text-sm font-medium flex-1 text-center space-x-12 text-[var(--color-dark-text)] dark:text-white">
        <Link to="/" className="hover-anim">
          {t("navbar.home")}
        </Link>
        <Link to="/about" className="hover-anim">
          {t("navbar.about")}
        </Link>
        <Link to="/schools" className="hover-anim">
          {t("navbar.schools")}
        </Link>
        <Link to="/ceramics" className="hover-anim">
          {t("navbar.ceramics")}
        </Link>
        <Link to="/contact" className="hover-anim">
          {t("navbar.contact")}
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex flex-row justify-end items-center flex-1 space-x-2.5">
        <ThemeToggle />
        {/* Language Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleLanguageDropdown}
            className="bg-gray-100 dark:bg-[var(--color-dark2-text)] px-3.5 py-1.5 border border-gray-300 dark:border-gray-500 rounded-md cursor-pointer flex flex-row justify-center items-center space-x-2 hover:bg-gray-200 dark:hover:bg-black/40 transition-all duration-200 w-20"
          >
            <h1 className="font-light text-sm uppercase tracking-wide dark:text-white">
              {currentLanguage.code}
            </h1>
            <span className={`fi fi-${currentLanguage.flag} text-sm`}></span>
          </button>

          {/* Dropdown Menu with Animations */}
          <div
            className={`absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-[var(--color-bg-dark)] shadow-lg ring-1 ring-gray-300 dark:ring-gray-500 ring-opacity-5 focus:outline-none z-50 transition-all duration-200 ease-out ${
              isLanguageOpen
                ? "transform opacity-100 scale-100 translate-y-0"
                : "transform opacity-0 scale-95 -translate-y-2 pointer-events-none"
            }`}
          >
            <div>
              {languages.map((language, index) => (
                <button
                  key={language.code}
                  onClick={() => selectLanguage(language)}
                  className={`flex items-center w-full px-4 py-2 text-sm transition-all duration-150 cursor-pointer ${
                    currentLanguage.code === language.code
                      ? "bg-blue-50 dark:bg-[var(--color-light2-text)] text-blue-700 dark:text-black font-medium"
                      : "text-[var(--color-dark2-text)] dark:text-white hover:bg-black/25"
                  } ${index === 0 ? "rounded-t-md" : ""} ${
                    index === languages.length - 1 ? "rounded-b-md" : ""
                  }`}
                >
                  <span className={`fi fi-${language.flag} mr-3`}></span>
                  {language.name}
                  {currentLanguage.code === language.code && (
                    <svg
                      className="ml-auto h-4 w-4 text-blue-600 dark:text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
