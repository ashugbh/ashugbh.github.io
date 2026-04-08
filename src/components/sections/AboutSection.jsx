import styles from "./AboutSection.module.css";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function AboutSection({ content }) {
  return (
    <section id="about" className={`section ${styles.section}`} tabIndex={-1}>
      <div className="container">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} />

        <div className={styles.content}>
          <Reveal className={styles.copyCard} delay={80}>
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <div className={styles.facts}>
            {content.facts.map((fact, index) => (
              <Reveal key={fact.title} delay={120 + index * 50}>
                <article className={styles.factCard}>
                  <h3 className={styles.factTitle}>{fact.title}</h3>
                  <p className={styles.factDescription}>{fact.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
