import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";
import { cx } from "../../assets/classNames";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export default function Reveal({
  as: Component = "div",
  children,
  className,
  delay = 0,
  threshold = 0.18,
  rootMargin = "0px 0px -12% 0px",
  ...props
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }

    const element = elementRef.current;
    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [prefersReducedMotion, rootMargin, threshold]);

  return (
    <Component
      ref={elementRef}
      className={cx(styles.reveal, isVisible && styles.visible, className)}
      style={{ "--reveal-delay": `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  );
}
