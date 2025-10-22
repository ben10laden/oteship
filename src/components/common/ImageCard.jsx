import React from "react";
import { Link } from "react-router";

const ImageCard = ({ title, description, image }) => {
  return (
    <div className="flex flex-col p-5 bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-dark)] rounded-md gap-5 drop-shadow-sm flex-1 transition-colors duration-200">
      <Link
        to="/ceramics"
        className="inset-0 rounded-md max-h-72 block overflow-hidden"
      >
        <img
          src={image}
          alt="Hands-On Learning"
          className="w-full h-full object-cover rounded-md transition-transform duration-400 ease-in-out hover:scale-105"
        />
      </Link>

      <div className="flex flex-col items-start justify-center gap-2">
        <h1 className="text-[var(--color-dark-text)] dark:text-white font-bold text-lg">
          {title}
        </h1>
        <p className="text-base text-[var(--color-secondary)] dark:text-[var(--color-bg-primary)]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
