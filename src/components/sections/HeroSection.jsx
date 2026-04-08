import styles from "./HeroSection.module.css";
import { cx } from "../../assets/classNames";
import Reveal from "../ui/Reveal";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useTypewriter } from "../../hooks/useTypewriter";

export default function HeroSection({ profile, actions }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const typedRole = useTypewriter(profile.roles, {
    enabled: !prefersReducedMotion
  });
  const [firstName, ...rest] = profile.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section id="home" className={`section ${styles.hero}`} tabIndex={-1} aria-label="Hero">
      <div className="container">
        <div className={styles.layout}>
          <Reveal className={styles.copy} delay={80}>
            <p className={styles.label}>{profile.roleLabel}</p>
            <h1 className={styles.title} aria-label={profile.name}>
              <span className={styles.titleFirst} aria-hidden="true">
                {firstName}
              </span>
              <span className={styles.titleLast} aria-hidden="true">
                <span className={styles.accent}>{lastName}</span>
              </span>
            </h1>
            <p className={styles.role}>
              I build <span className={styles.typing}>{typedRole}</span>
            </p>
            <p className={styles.summary}>{profile.summary}</p>

            <div className={styles.actions}>
              {actions.map((action) => (
                <a
                  key={action.label}
                  className={cx(
                    styles.action,
                    action.variant === "solid" ? styles.actionPrimary : styles.actionGhost,
                    action.disabled && styles.actionDisabled
                  )}
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
              ))}
            </div>

            <div className={styles.stats} aria-label="Quick profile highlights">
              {profile.stats.map((stat) => (
                <article key={stat.title} className={styles.statCard}>
                  <h2 className={styles.statTitle}>{stat.title}</h2>
                  <p className={styles.statDescription}>{stat.description}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <div className={styles.visual} aria-label="Profile photo and focus areas">
            <Reveal delay={140}>
              <figure className={styles.portraitCard}>
                <div className={styles.portraitFrame}>
                  <img
                    src={profile.image.src}
                    alt={profile.image.alt}
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    width={profile.image.width}
                    height={profile.image.height}
                  />
                </div>
              </figure>
            </Reveal>

            <Reveal delay={220}>
              <aside className={styles.focusCard}>
                <h2 className={styles.focusTitle}>Current Focus</h2>
                <ul className={styles.focusList}>
                  {profile.focusPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </aside>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
