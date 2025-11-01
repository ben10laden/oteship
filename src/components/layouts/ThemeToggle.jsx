import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      // Use saved theme from localStorage
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // Use system preference as fallback
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(systemPrefersDark);
      document.documentElement.classList.toggle("dark", systemPrefersDark);
    }
  }, []);

  const handleToggle = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    // Update localStorage
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");

    // Update HTML class for Tailwind dark mode
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  return (
    <button
      className="relative w-8 h-8 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-[var(--color-secondary)] transition-colors duration-200 overflow-hidden cursor-pointer"
      style={{ lineHeight: 0 }}
      onClick={handleToggle}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Moon - shows when in light mode */}
      <i
        className={`ml-[1px] fa-solid fa-moon text-xl text-[var(--color-secondary-light)] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
        transition-all duration-300 ease-out origin-center ${
          isDarkMode
            ? "opacity-0 scale-50 rotate-90"
            : "opacity-100 scale-100 rotate-0"
        }`}
      ></i>

      {/* Sun - shows when in dark mode */}
      <i
        className={`fa-solid fa-sun text-xl text-[var(--color-light3-text)] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
        transition-all duration-300 ease-out origin-center ${
          isDarkMode
            ? "opacity-100 scale-100 rotate-0"
            : "opacity-0 scale-50 -rotate-90"
        }`}
      ></i>
    </button>
  );
};

export default ThemeToggle;
