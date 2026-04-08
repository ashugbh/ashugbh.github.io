import styles from "./ExperienceSection.module.css";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function ExperienceSection({ entries }) {
  return (
    <section id="experience" className={`section ${styles.section}`} tabIndex={-1}>
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Professional timeline"
          description="Recent engineering work spanning mobile products, backend services, and security-focused delivery."
        />

        <div className={styles.timeline}>
          {entries.map((entry, index) => (
            <Reveal key={`${entry.company}-${entry.period}`} delay={80 + index * 60}>
              <article className={styles.entry}>
                <div className={styles.header}>
                  <div>
                    <p className={styles.period}>{entry.period}</p>
                    <h3 className={styles.role}>{entry.role}</h3>
                    <p className={styles.company}>{entry.company}</p>
                  </div>
                </div>

                <ul className={styles.list}>
                  {entry.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
