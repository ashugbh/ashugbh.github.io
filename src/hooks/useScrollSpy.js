import { useEffect, useState } from "react";

const DEFAULT_THRESHOLDS = [0.18, 0.34, 0.56];

export function useScrollSpy(sectionIds, options = {}) {
  const { rootMargin = "-32% 0px -54% 0px", threshold = DEFAULT_THRESHOLDS } = options;
  const initialSection = (() => {
    if (typeof window === "undefined") {
      return sectionIds[0] ?? "";
    }

    const hash = window.location.hash.replace("#", "");
    if (sectionIds.includes(hash)) {
      return hash;
    }

    return sectionIds[0] ?? "";
  })();

  const [activeSection, setActiveSection] = useState(initialSection);

  useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const elements = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean);

    if (elements.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length === 0) {
          return;
        }

        visibleEntries.sort((left, right) => right.intersectionRatio - left.intersectionRatio);
        setActiveSection(visibleEntries[0].target.id);
      },
      { rootMargin, threshold }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [rootMargin, sectionIds, threshold]);

  return activeSection;
}
