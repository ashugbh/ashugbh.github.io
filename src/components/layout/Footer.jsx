import styles from "./Footer.module.css";
import { cx } from "../../assets/classNames";

function SocialIcon({ label }) {
  if (label === "GitHub") {
    return (
      <svg className={styles.socialIcon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 1.8a10.2 10.2 0 0 0-3.23 19.88c.5.1.68-.21.68-.48v-1.7c-2.78.6-3.36-1.18-3.36-1.18-.45-1.18-1.1-1.48-1.1-1.48-.9-.62.07-.6.07-.6 1 .07 1.53 1 1.53 1 .88 1.5 2.3 1.06 2.86.8.08-.63.34-1.07.62-1.32-2.22-.26-4.56-1.1-4.56-4.92 0-1.08.38-1.96 1-2.65-.1-.25-.44-1.28.1-2.65 0 0 .82-.26 2.68 1a9.3 9.3 0 0 1 4.88 0c1.86-1.26 2.68-1 2.68-1 .54 1.37.2 2.4.1 2.65.62.7 1 1.57 1 2.65 0 3.84-2.34 4.65-4.57 4.9.35.3.67.9.67 1.83v2.72c0 .27.18.58.68.48A10.2 10.2 0 0 0 12 1.8Z" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg className={styles.socialIcon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.8 9.5h4.36V21H2.8V9.5Zm7 0h4.18v1.57h.06c.58-1.1 2-2.26 4.13-2.26 4.42 0 5.24 2.9 5.24 6.68V21h-4.36v-4.9c0-1.17-.02-2.68-1.64-2.68-1.64 0-1.9 1.28-1.9 2.6V21H9.8V9.5Z" />
      </svg>
    );
  }

  return (
    <svg className={styles.socialIcon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v13.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25Zm2.04.75L12 11.2 18.96 6H5.04Zm13.71 1.89-6.3 4.7a.75.75 0 0 1-.9 0l-6.3-4.7V18h13.5V7.89Z" />
    </svg>
  );
}

export default function Footer({ brand, navItems, socialLinks }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.branding}>
            <a className={styles.brandLink} href="#home">
              <span className={styles.brandMark} aria-hidden="true">
                AG
              </span>
              <span className={styles.brandText}>{brand.name}</span>
            </a>
            <p className={styles.brandDescription}>{brand.summary}</p>
          </div>

          <nav className={styles.nav} aria-label="Footer navigation">
            {navItems
              .filter((item) => item.id !== "home")
              .map((item) => (
                <a key={item.id} className={styles.navLink} href={`#${item.id}`}>
                  {item.label}
                </a>
              ))}
          </nav>

          <div className={styles.social} aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                className={styles.socialLink}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                aria-label={`${link.label} profile`}
              >
                <SocialIcon label={link.label} />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} {brand.name}. All rights reserved.
          </p>
          <a className={styles.topLink} href="#home">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
