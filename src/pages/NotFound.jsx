import React from "react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-full flex-1 bg-gradient-to-tl from-[#622FBE] to-[#224EBC] flex items-center justify-center">
      <div className="text-center flex flex-col justify-center items-center gap-5">
        <h1 className="text-9xl font-bold text-white">404</h1>
        <p className="text-2xl text-[var(--color-light1-text)]">
          Page Not Found
        </p>
        <p className="text-[var(--color-light2-text)] max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="cursor-pointer py-3 px-6 bg-white text-[var(--color-primary)] font-semibold border-2 border-transparent rounded-lg hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 whitespace-nowrap text-center"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
