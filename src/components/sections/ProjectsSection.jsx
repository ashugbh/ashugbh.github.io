import { useState } from "react";
import styles from "./ProjectsSection.module.css";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import ProjectDemoModal from "../ui/ProjectDemoModal";
import { cx } from "../../assets/classNames";

function ProjectAction({ action, projectTitle, onDemoOpen }) {
  const actionClassName = cx(
    styles.action,
    action.variant === "solid" ? styles.actionPrimary : styles.actionGhost,
    action.disabled && styles.actionDisabled
  );

  if (action.type === "demo") {
    return (
      <button
        className={actionClassName}
        type="button"
        onClick={() => onDemoOpen(action.slides)}
        aria-haspopup="dialog"
        aria-label={`Open live demo for ${projectTitle}`}
      >
        {action.label}
      </button>
    );
  }

  return (
    <a
      className={actionClassName}
      href={action.href}
      target={action.external ? "_blank" : undefined}
      rel={action.external ? "noreferrer" : undefined}
      aria-disabled={action.disabled ? "true" : undefined}
      tabIndex={action.disabled ? -1 : undefined}
      onClick={(event) => {
        if (action.disabled) {
          event.preventDefault();
        }
      }}
    >
      {action.label}
    </a>
  );
}

function ProjectCard({ project, onDemoOpen }) {
  return (
    <article className={styles.projectCard}>
      <div className={styles.projectMedia}>
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          decoding="async"
          width={1280}
          height={720}
        />
        {project.demo ? (
          <span className={styles.projectBadge} aria-hidden="true">
            {project.demo.badge}
          </span>
        ) : null}
      </div>
      <div className={styles.projectBody}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.projectTags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.projectTag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.projectActions}>
          {project.actions.map((action) => (
            <ProjectAction
              key={action.label}
              action={action}
              projectTitle={project.title}
              onDemoOpen={onDemoOpen}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection({ projectCards }) {
  const [activeDemoProject, setActiveDemoProject] = useState(null);

  const handleCloseDemo = () => setActiveDemoProject(null);
  const handleDemoOpen = (project, slides) => {
    const demoSlides = slides?.length ? slides : project.demo?.slides;

    if (!demoSlides?.length) {
      return;
    }

    setActiveDemoProject({
      ...project,
      demo: {
        badge: project.demo?.badge || "Interactive screenshot tour",
        slides: demoSlides
      }
    });
  };

  return (
    <section id="projects" className={`section ${styles.section}`} tabIndex={-1}>
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A mix of FinTech, backend, and AI-driven products that show product ownership and technical depth."
        />

        <div className={styles.projectsGrid}>
          {projectCards.map((project, index) => (
            <Reveal key={project.title} delay={80 + index * 50}>
              <ProjectCard
                project={project}
                onDemoOpen={(slides) => handleDemoOpen(project, slides)}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectDemoModal project={activeDemoProject} onClose={handleCloseDemo} />
    </section>
  );
}
