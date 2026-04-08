import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import { cx } from "../../assets/classNames";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar({
  items,
  activeSection,
  onNavigate,
  theme,
  onToggleTheme,
  brand
}) {
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleResize = () => {
      if (window.innerWidth > 860) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handlePointerDown = (event) => {
      const header = headerRef.current;
      if (header && !header.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  const handleNavigate = (sectionId) => {
    onNavigate(sectionId);
    setIsOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={cx(styles.header, isScrolled && styles.scrolled, isOpen && styles.open)}
    >
      <div className="container">
        <div className={styles.shell}>
          <a
            className={styles.brand}
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              handleNavigate("home");
            }}
            aria-label="Homepage"
          >
            <span className={styles.avatar} aria-hidden="true">
              <img
                src={brand.image}
                alt=""
                loading="eager"
                decoding="async"
                width={brand.imageWidth}
                height={brand.imageHeight}
              />
            </span>
            <span className={styles.brandText}>
              <span className={styles.brandName}>{brand.name}</span>
              <span className={styles.brandSubtitle}>{brand.subtitle}</span>
            </span>
          </a>

          <div className={cx(styles.navOverlay, isOpen && styles.navOverlayOpen)}>
            <nav className={styles.nav} id="primary-navigation" aria-label="Primary navigation">
              <ul className={styles.navList}>
                {items.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <li key={item.id}>
                      <a
                        className={cx(styles.navLink, isActive && styles.navLinkActive)}
                        href={`#${item.id}`}
                        aria-current={isActive ? "page" : undefined}
                        onClick={(event) => {
                          event.preventDefault();
                          handleNavigate(item.id);
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className={styles.actions}>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              className={styles.menuButton}
              type="button"
              onClick={() => setIsOpen((currentValue) => !currentValue)}
              aria-expanded={isOpen}
              aria-controls="primary-navigation"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <span className={cx(styles.menuBar, styles.menuBarTop)} />
              <span className={cx(styles.menuBar, styles.menuBarMiddle)} />
              <span className={cx(styles.menuBar, styles.menuBarBottom)} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
