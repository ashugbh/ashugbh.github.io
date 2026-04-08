import { useEffect } from "react";
import styles from "./PortfolioPage.module.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";
import {
  aboutContent,
  contactCards,
  experienceEntries,
  heroActions,
  heroProfile,
  navigationItems,
  projectCards,
  siteMetadata,
  socialLinks,
  skillGroups
} from "../assets/portfolioData";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { useScrollToSection } from "../hooks/useScrollToSection";
import { useThemeMode } from "../hooks/useThemeMode";

const sectionIds = navigationItems.map((item) => item.id);

const brand = {
  name: heroProfile.name,
  subtitle: "Flutter & Backend Engineer",
  summary: heroProfile.summary,
  image: heroProfile.image.src,
  imageWidth: heroProfile.image.width,
  imageHeight: heroProfile.image.height
};

export default function PortfolioPage() {
  const { theme, toggleTheme } = useThemeMode();
  const activeSection = useScrollSpy(sectionIds);
  const scrollToSection = useScrollToSection();

  useDocumentMeta(siteMetadata);

  useEffect(() => {
    const themeColor = theme === "dark" ? "#020617" : "#f3f7fc";
    const themeColorMeta = document.head.querySelector('meta[name="theme-color"]');

    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", themeColor);
    }
  }, [theme]);

  return (
    <div className={styles.page}>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Navbar
        items={navigationItems}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        theme={theme}
        onToggleTheme={toggleTheme}
        brand={brand}
      />

      <main id="main-content" className={styles.main}>
        <HeroSection profile={heroProfile} actions={heroActions} />
        <AboutSection content={aboutContent} />
        <SkillsSection groups={skillGroups} />
        <ExperienceSection entries={experienceEntries} />
        <ProjectsSection projectCards={projectCards} />
        <ContactSection contacts={contactCards} />
      </main>

      <Footer brand={brand} navItems={navigationItems} socialLinks={socialLinks} />
    </div>
  );
}
