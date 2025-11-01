import { Link } from "react-router";

const SchoolCard = ({
  to,
  image,
  title,
  description,
  country,
  location,
  aosDelay,
}) => {
  return (
    <div className="flex-1 " data-aos="fade-down" data-aos-delay={aosDelay}>
      <div className="flex flex-col bg-white dark:bg-[var(--color-dark2-text)] drop-shadow-md rounded-md min-w-0 flex-1 transition-colors duration-200">
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
        <div className="flex flex-col justify-start items-start gap-4 flex-1 p-5">
          <h1 className="text-xl font-bold text-[var(--color-dark-text)] dark:text-white w-full line-clamp-2">
            {title}
          </h1>
          <p className="w-full text-start text-base text-[var(--color-secondary)] dark:text-[var(--color-bg-primary)]">
            {description}
          </p>
          <Link
            to={location}
            className="link-container mt-auto flex flex-row items-center justify-center gap-1.5 text-sm text-[var(--color-primary)] dark:text-[var(--color-primary2)]"
          >
            <i className="fa-solid fa-location-dot"></i>
            <p className="hover-anim [--hover-color:var(--color-primary)] dark:[--hover-color:var(--color-primary2)]">
              {country}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SchoolCard;
