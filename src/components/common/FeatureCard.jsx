import { Link } from "react-router";

const FeatureCard = ({ icon, title, description, to, aosDelay }) => {
  return (
    <div data-aos="fade-down" data-aos-delay={aosDelay} data-aos-offset="100">
      <Link
        to={to}
        className="[transition:all_200ms,translate_300ms] flex flex-col justify-start items-start gap-3 bg-white dark:bg-[var(--color-dark2-text)] drop-shadow-md rounded-md flex-1 p-5 min-w-0 hover:shadow-xl/4 hover:-translate-y-[0.25rem]"
      >
        <i
          className={`${icon} text-3xl text-[var(--color-primary)] dark:text-[var(--color-primary2)]`}
        ></i>
        <h1 className="text-xl font-bold text-[var(--color-dark-text)] dark:text-white w-full">
          {title}
        </h1>
        <p className="w-full text-start text-base text-[var(--color-secondary)] dark:text-[var(--color-bg-primary)]">
          {description}
        </p>
      </Link>
    </div>
  );
};

export default FeatureCard;
