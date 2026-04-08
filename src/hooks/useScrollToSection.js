import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function useScrollToSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (sectionId) => {
    if (typeof document === "undefined") {
      return;
    }

    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start"
    });

    if (typeof window.history?.replaceState === "function") {
      window.history.replaceState(null, "", `#${sectionId}`);
    }

    if (typeof target.focus === "function") {
      target.focus({ preventScroll: true });
    }
  };
}
