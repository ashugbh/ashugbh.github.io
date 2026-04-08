import styles from "./ContactSection.module.css";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function ContactSection({ contacts }) {
  return (
    <section id="contact" className={`section ${styles.section}`} tabIndex={-1}>
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Direct contact"
          description="Reach me directly for Flutter, backend, or FinTech opportunities."
        />

        <Reveal className={styles.links} delay={80}>
          {contacts.map((contact) => (
            <a
              key={contact.label}
              className={styles.linkCard}
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noreferrer" : undefined}
            >
              <span className={styles.linkLabel}>{contact.label}</span>
              <strong className={styles.linkValue}>{contact.value}</strong>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
