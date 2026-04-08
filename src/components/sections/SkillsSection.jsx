import styles from "./SkillsSection.module.css";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function SkillsSection({ groups }) {
  return (
    <section id="skills" className={`section ${styles.section}`} tabIndex={-1}>
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Core capabilities"
          description="A focused stack for mobile products, backend systems, architecture, and delivery quality."
        />

        <div className={styles.grid}>
          {groups.map((group, index) => (
            <Reveal key={group.title} delay={80 + index * 50}>
              <article className={styles.card}>
                <h3 className={styles.title}>{group.title}</h3>
                <ul className={styles.list}>
                  {group.items.map((item) => (
                    <li key={item.label} className={styles.item}>
                      <span className={styles.badge}>{item.code}</span>
                      <span className={styles.label}>{item.label}</span>
                    </li>
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
