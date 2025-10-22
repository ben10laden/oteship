import { Link } from "react-router";
import HeroSection from "../components/sections/Home/HeroSection";
import AboutSection from "../components/sections/Home/AboutSection";
import GoalsSection from "../components/sections/Home/GoalsSection";
import SchoolsSection from "../components/sections/Home/SchoolsSection";
import CeramicsSection from "../components/sections/Home/CeramicsSection";
import OpportunitiesSection from "../components/sections/Home/OpportunitiesSection";
import ContactSection from "../components/sections/Home/ContactSection";

export default function Home() {
  return (
    <div className="bg-[var(--color-bg-primary)] flex-1">
      {/*hero*/}
      <HeroSection />

      {/*about section*/}
      <AboutSection />

      {/*goals section*/}
      <GoalsSection />

      {/*schools section*/}
      <SchoolsSection />

      {/*ceramics section*/}
      <CeramicsSection />

      {/*opportunities section*/}
      <OpportunitiesSection />

      {/*contact section*/}
      <ContactSection />
    </div>
  );
}
