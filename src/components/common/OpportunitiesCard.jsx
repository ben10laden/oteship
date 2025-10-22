const OpportunitiesCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 bg-white/10 drop-shadow-md rounded-md flex-1 p-5 min-w-0">
      <i
        className={`${icon} text-3xl text-[var(--color-gold)] dark:text-[var(--color-gold2)] transition-transform duration-300 group-hover:scale-110`}
      ></i>
      <h1 className="text-xl font-bold text-white">{title}</h1>
      <p className="w-full text-center text-base text-[var(--color-bg-primary)]">
        {description}
      </p>
    </div>
  );
};

export default OpportunitiesCard;
