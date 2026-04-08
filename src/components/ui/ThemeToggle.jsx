import styles from "./ThemeToggle.module.css";
import { cx } from "../../assets/classNames";

function SunIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 5.2a.8.8 0 0 1 .8.8v1.1a.8.8 0 0 1-1.6 0V6a.8.8 0 0 1 .8-.8Zm0 10.1a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6Zm0 2.2a.8.8 0 0 1 .8.8v1.1a.8.8 0 0 1-1.6 0v-1.1a.8.8 0 0 1 .8-.8Zm6.1-7.4h1.1a.8.8 0 0 1 0 1.6h-1.1a.8.8 0 0 1 0-1.6Zm-13.3 0h1.1a.8.8 0 0 1 0 1.6H4.8a.8.8 0 0 1 0-1.6Zm10.5-4.7a.8.8 0 0 1 1.1 0l.8.8a.8.8 0 1 1-1.1 1.1l-.8-.8a.8.8 0 0 1 0-1.1Zm-9.5 0a.8.8 0 0 1 0 1.1l-.8.8a.8.8 0 0 1-1.1-1.1l.8-.8a.8.8 0 0 1 1.1 0Zm9.5 10.5a.8.8 0 0 1 0 1.1l-.8.8a.8.8 0 1 1-1.1-1.1l.8-.8a.8.8 0 0 1 1.1 0Zm-9.5 0a.8.8 0 0 1 1.1 0l.8.8a.8.8 0 0 1-1.1 1.1l-.8-.8a.8.8 0 0 1 0-1.1Z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M18.9 14.7A8.8 8.8 0 0 1 9.3 5.1a.8.8 0 0 0-1-.77A9.8 9.8 0 1 0 19.7 15.7a.8.8 0 0 0-.8-1 .8.8 0 0 0 0 0Z" />
    </svg>
  );
}

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      className={cx(styles.toggle)}
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      aria-pressed={theme === "dark"}
    >
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
      <span className={styles.label}>{theme === "dark" ? "Dark" : "Light"}</span>
    </button>
  );
}
