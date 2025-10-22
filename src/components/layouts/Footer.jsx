export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Partner Schools", href: "/schools" },
    { name: "Ceramics", href: "/ceramics" },
    { name: "Contact", href: "/contact" },
    { name: "Project Reports", href: "/" },
    { name: "Training Materials", href: "/" },
    { name: "Best Practices", href: "/" },
    { name: "News & Updates", href: "/" },
    { name: "Privacy Policy", href: "/" },
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
            OTESHIP
          </h1>
          <p className="text-[var(--color-light3-text)] mb-2">
            An Erasmus+ project dedicated to promoting disability workplace
            inclusion through handmade ceramics and entrepreneurship education.
          </p>
          <p className="text-sm text-[var(--color-secondary-light)] ">
            Co-funded by the European Union
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--color-divider)] my-6"></div>

        {/* Quick Links */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
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
              © {new Date().getFullYear()} OTESHIP Project. All rights reserved.
            </p>
            <p className="text-sm text-[var(--color-secondary-light)]">
              Project Number: {projectNumber}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
