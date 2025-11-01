import React from "react";
import { Link } from "react-router";

const ImageCardSmall = ({ to, image, title, description, aosDelay }) => {
  return (
    <div className="flex-1" data-aos="fade-down" data-aos-delay={aosDelay}>
      <div className="flex flex-col bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-dark)] drop-shadow-md rounded-md min-w-0 flex-1 transition-colors duration-200">
        <Link
          to={to}
          className="inset-0 w-full max-h-52 block overflow-hidden rounded-t-md"
        >
          <img
            src={image}
            alt="Hands-On Learning"
            className="w-full h-full object-cover transition-transform duration-400 ease-in-out hover:scale-105"
          />
        </Link>
        <div className="flex flex-col justify-start items-start gap-1 flex-1 p-4">
          <h1 className="text-base font-bold text-[var(--color-dark-text)] dark:text-white w-full line-clamp-2">
            {title}
          </h1>
          <p className="w-full text-start text-sm text-[var(--color-secondary)] dark:text-[var(--color-bg-primary)]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCardSmall;
