import styles from "./SectionHeading.module.css";
import { cx } from "../../assets/classNames";

export default function SectionHeading({ eyebrow, title, description, centered = false, className }) {
  return (
    <header className={cx(styles.heading, centered && styles.centered, className)}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}
