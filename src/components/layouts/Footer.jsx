import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("layouts");

  const quickLinks = [
    { name: t("footer.home"), href: "/" },
    { name: t("footer.about"), href: "/about" },
    { name: t("footer.partnerSchools"), href: "/schools" },
    { name: t("footer.ceramics"), href: "/ceramics" },
    { name: t("footer.contact"), href: "/contact" },
    { name: t("footer.projectReports"), href: "/" },
    { name: t("footer.trainingMaterials"), href: "/" },
    { name: t("footer.bestPractices"), href: "/" },
    { name: t("footer.newsUpdates"), href: "/" },
    { name: t("footer.privacyPolicy"), href: "/" },
  ];

  const acronym = "OTESHIP";
  const projectId = Array.from(acronym)
    .map((char) => char.charCodeAt(0))
    .join("")
    .slice(0, 9)
    .padEnd(9, "0");
  const projectNumber = `2025-10-EU01-KA220-ADU-${projectId}`;

  return (
    <footer className="bg-[var(--color-dark-text)] dark:bg-black transition-colors duration-200">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8">
        {/* Project Info */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-primary2)] mb-2">
            {t("footer.title")}
          </h1>
          <p className="text-[var(--color-light3-text)] mb-2">
            {t("footer.description")}
          </p>
          <p className="text-sm text-[var(--color-secondary-light)] ">
            {t("footer.coFunded")}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--color-divider)] my-6"></div>

        {/* Quick Links */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">
            {t("footer.quickLinks")}
          </h2>
          <div className="flex flex-wrap gap-4 md:gap-8">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[var(--color-light3-text)] hover-anim transition-colors duration-200"
                style={{ "--hover-color": "var(--color-secondary-light)" }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-[var(--color-divider)]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--color-secondary-light)] text-center sm:text-left">
              {t("footer.copyright", { year: new Date().getFullYear() })}
            </p>
            <p className="text-sm text-[var(--color-secondary-light)]">
              {t("footer.projectNumber", { number: projectNumber })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
